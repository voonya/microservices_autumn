export const SCHEDULE_MANAGER_BASE_ROUTE = '/api/schedule';

export enum ScheduleManagerRoutes {
    GET_SCHEDULE = '/:id',
    CREATE_SCHEDULE = '',
    DELETE_SCHEDULE = '/:id',
    UPDATE_SCHEDULE = '/:id',
    GET_STUDENT_SCHEDULE = '/student/:id',
    BROKE = '/broke',
    FIX = '/fix'
}

export enum ScheduleSlotManagerRoutes {
    GET_SCHEDULESLOT = '/scheduleslot/:id',
    CREATE_SCHEDULESLOT = '/scheduleslot',
    DELETE_SCHEDULESLOT = '/scheduleslot/:id',
    UPDATE_SCHEDULESLOT = '/scheduleslot/:id',
}

export enum SlotManagerRoutes {
    GET_SLOT = '/slot/:id',
    CREATE_SLOT = '/slot',
    DELETE_SLOT = '/slot/:id',
    UPDATE_SLOT = '/slot/:id',
}
