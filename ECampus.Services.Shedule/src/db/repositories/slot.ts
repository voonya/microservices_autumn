import { SlotModel } from 'db/schemas/slot';

type SlotClient = typeof SlotModel;

class SlotRepository {
    private _dbClient: SlotClient;

    constructor(sequelizeModel: SlotClient) {
        this._dbClient = sequelizeModel;
    }

    getById(id: string) {
        return this._dbClient.findOne({ where: { id }, raw: true });
    }

    create(
        id: string,
        day: string,
        begin_time: Date,
        end_time: Date
    ) {
        return this._dbClient.create({
            id: id,
            day: day,
            begin_time: begin_time,
            end_time: end_time
        });
    }

    delete(id: string) {
        return this._dbClient.destroy({
            where: {
                id: id,
            },
        });
    }

    update(
        id: string,
        day: string,
        begin_time: Date,
        end_time: Date
    ) {
        return this._dbClient.update(
            {
                day: day,
                begin_time: begin_time,
                end_time: end_time
            },
            {
                where: {
                    id: id,
                },
            },
        );
    }
}

export { SlotRepository };
