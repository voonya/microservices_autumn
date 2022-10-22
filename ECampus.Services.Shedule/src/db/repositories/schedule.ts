import { ScheduleModel } from 'db/schemas/schedule';

type ScheduleClient = typeof ScheduleModel;

class ScheduleRepository {
    private _dbClient: ScheduleClient;

    constructor(sequelizeModel: ScheduleClient) {
        this._dbClient = sequelizeModel;
    }

    getById(id: string) {
        return this._dbClient.findOne({ where: { id }, raw: true });
    }

    create(
        id: string,
        year: number
    ) {
        return this._dbClient.create({
            id: id,
            year: year
        }, { raw: true });
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
        year: number,
    ) {
        return this._dbClient.update(
            {
                year: year,
            },
            {
                where: {
                    id: id,
                },
            },
        );
    }
}

export { ScheduleRepository };
