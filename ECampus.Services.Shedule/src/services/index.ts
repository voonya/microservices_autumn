import { ScheduleService } from './schedule';
import { ScheduleSlotService } from './schedule-slot';
import { SlotService } from './slot';

const initServices = ({
    scheduleRepository,
    scheduleSlotRepository,
    slotRepository,
}) => {
    return {
        scheduleService: new ScheduleService(scheduleRepository),
        scheduleSlotService: new ScheduleSlotService(scheduleSlotRepository),
        slotService: new SlotService(slotRepository),
    };
};

export { initServices, ScheduleService, ScheduleSlotService, SlotService };
