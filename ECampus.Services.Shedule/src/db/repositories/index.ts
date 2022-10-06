import { ScheduleSlotRepository } from './schedule-slot';
import { ScheduleRepository } from './schedule';
import { SlotRepository } from './slot';

const initRepositories = ({ scheduleDB, scheduleSlotDB, slotDB }) => {
    return {
        scheduleRepository: new ScheduleRepository(scheduleDB),
        scheduleSlotRepository: new ScheduleSlotRepository(scheduleSlotDB),
        slotRepository: new SlotRepository(slotDB),
    };
};

export { initRepositories, ScheduleRepository, ScheduleSlotRepository };
