// import { ScheduleModel } from 'db/schemas/schedule';

// type ScheduleClient = typeof ScheduleModel;

class ScheduleRepository {
    // private _dbClient: ScheduleClient;

    // constructor(sequelizeModel: ScheduleClient) {
    //     this._dbClient = sequelizeModel;
    // }

    getById(id: string) {
        return {
            id: 1,
            year: 2022,
        };
    }

    create(id: string, year: number) {
        return {
            id: id,
            year: year,
        };
    }

    delete(id: string) {
        return {
            id: id,
            year: 2022,
        };
    }

    update(id: string, year: number) {
        return {
            id: id,
            year: year,
        };
    }
}

export { ScheduleRepository };
