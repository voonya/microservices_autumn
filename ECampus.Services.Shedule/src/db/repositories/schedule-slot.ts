import type { PrismaClient } from '@prisma/client';
import { ScheduleSlot } from 'constants/types/schedule-slot';

class ScheduleSlotRepository {
    private _dbClient: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this._dbClient = prismaClient;
    }

    getById(id: string) {
        return this._dbClient.scheduleslot.findFirst({ where: { id } });
    }

    create(scheduleslot: ScheduleSlot) {
        console.log(scheduleslot)
        return this._dbClient.scheduleslot.create({
            data: scheduleslot,
        });
    }

    delete(id: string) {
        return this._dbClient.scheduleslot.delete({
            where: {
                id: id,
            },
        });
    }

    update(scheduleslot: ScheduleSlot) {
        return this._dbClient.scheduleslot.update({
            where: {
                id: scheduleslot.id,
            },
            data: scheduleslot,
        });
    }
}

export { ScheduleSlotRepository };
