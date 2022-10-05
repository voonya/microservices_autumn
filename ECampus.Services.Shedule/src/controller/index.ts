import { ScheduleSlotController } from './schedule-slot';

const initControllers = ({ scheduleSlotService }) => {
    return {
        scheduleSlotController: new ScheduleSlotController(scheduleSlotService),
    };
};

export { initControllers, ScheduleSlotController };
