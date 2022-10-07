import { ScheduleSlotRepository } from './schedule-slot';
import { ScheduleRepository } from './schedule';
import { SlotRepository } from './slot';

const initRepositories = () => {
    return {
        scheduleRepository: new ScheduleRepository(),
        scheduleSlotRepository: new ScheduleSlotRepository(),
        slotRepository: new SlotRepository(),
    };
};

export { initRepositories, ScheduleRepository, ScheduleSlotRepository };
