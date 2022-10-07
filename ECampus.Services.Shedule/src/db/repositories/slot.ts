// import { SlotModel } from 'db/schemas/slot';

// type SlotClient = typeof SlotModel;

class SlotRepository {
    // private _dbClient: SlotClient;

    // constructor(sequelizeModel: SlotClient) {
    //     this._dbClient = sequelizeModel;
    // }

    getById(id: string) {
        return {
            id: id,
            day: 'Sunday',
            begin_time: '15:00',
            end_time: '17:00',
        };
    }

    create(id: string, day: string, begin_time: Date, end_time: Date) {
        return {
            id: id,
            day: day,
            begin_time: begin_time,
            end_time: end_time,
        };
    }

    delete(id: string) {
        return {
            id: id,
            day: 'Sunday',
            begin_time: '15:00',
            end_time: '17:00',
        };
    }

    update(id: string, day: string, begin_time: Date, end_time: Date) {
        return {
            id: id,
            day: day,
            begin_time: begin_time,
            end_time: end_time,
        };
    }
}

export { SlotRepository };
