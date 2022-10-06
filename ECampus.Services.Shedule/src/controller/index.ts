import { ScheduleSlotController } from './schedule-slot';
import { ScheduleController } from './schedule';
import { SlotController } from './slot';

const initControllers = ({ scheduleService, scheduleSlotService, slotService }) => {
    return {
        scheduleController: new ScheduleController(scheduleService),
        scheduleSlotController: new ScheduleSlotController(scheduleSlotService),
        slotController: new SlotController(slotService)
    };
};

export { initControllers, ScheduleController, ScheduleSlotController, SlotController };
