import { ScheduleSlotRepository } from './schedule-slot';
import { ScheduleRepository } from './schedule';
import { SlotRepository } from './slot';
import type { PrismaClient } from '@prisma/client';

const initRepositories = (prismaClient: PrismaClient) => {
    return {
        scheduleRepository: new ScheduleRepository(prismaClient),
        scheduleSlotRepository: new ScheduleSlotRepository(prismaClient),
        slotRepository: new SlotRepository(prismaClient),
    };
};

export {
    initRepositories,
    ScheduleRepository,
    ScheduleSlotRepository,
    SlotRepository,
};
