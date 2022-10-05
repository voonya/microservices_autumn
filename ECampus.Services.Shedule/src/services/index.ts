import { ScheduleSlotService } from './schedule-slot';

const initServices = ({ scheduleSlotRepository }) => {
    return {
        scheduleSlotService: new ScheduleSlotService(scheduleSlotRepository),
    };
};

export { initServices, ScheduleSlotService };
