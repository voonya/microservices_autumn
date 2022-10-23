import type { PrismaClient } from '@prisma/client';
import { Schedule } from 'constants/types/schedule';

class ScheduleRepository {
    private _dbClient: PrismaClient;

    constructor(sequelizeModel: PrismaClient) {
        this._dbClient = sequelizeModel;
    }

    getById(id: string) {
        return this._dbClient.schedule.findFirst({ where: { id } });
    }

    create(schedule: Schedule) {
        return this._dbClient.schedule.create({
            data: schedule,
        });
    }

    delete(id: string) {
        return this._dbClient.schedule.delete({
            where: {
                id: id,
            },
        });
    }

    update(schedule: Schedule) {
        return this._dbClient.schedule.update({
            where: {
                id: schedule.id,
            },
            data: schedule,
        });
    }
}

export { ScheduleRepository };
