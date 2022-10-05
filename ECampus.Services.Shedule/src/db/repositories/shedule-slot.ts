import { ScheduleSlotModel } from 'db/schemas/shedule-slot';

type ScheduleSlotClient = typeof ScheduleSlotModel;

class ScheduleSlotRepository {
    private _dbClient: ScheduleSlotClient;

    constructor(sequelizeModel: ScheduleSlotClient) {
        this._dbClient = sequelizeModel;
    }

    getById(id: string) {
        return this._dbClient.findOne({ where: { id }, raw: true });
    }
}

export { ScheduleSlotRepository };
