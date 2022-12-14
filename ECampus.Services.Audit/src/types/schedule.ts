import { EntityEvents } from "./file";


export enum ScheduleEntity {
    SCHEDULE = 'SCHEDULE',
    SLOT = 'SLOT',
    SCHEDULE_SLOT = 'SCHEDULE_SLOT',
}

export interface IScheduleData {
    event: EntityEvents;
    date: Date;
    data: {
        entity: ScheduleEntity;
        id: string
        day?: string;
        begin_time?: Date;
        end_time?: Date;
        schedule_id?: string;
        slot_id?: string;
        student_id?: string;
        course_id?: string;
        year?: number;
    }
}