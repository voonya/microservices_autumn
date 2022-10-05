import { ScheduleSlotRepository } from './shedule-slot';

const initRepositories = ({ scheduleDB }) => {
    return {
        scheduleSlotRepository: new ScheduleSlotRepository(scheduleDB),
    };
};

export { initRepositories, ScheduleSlotRepository };
