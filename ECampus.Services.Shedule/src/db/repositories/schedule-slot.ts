// import { ScheduleSlotModel } from 'db/schemas/schedule-slot';

// type ScheduleSlotClient = typeof ScheduleSlotModel;

class ScheduleSlotRepository {
    // private _dbClient: ScheduleSlotClient;

    // constructor(sequelizeModel: ScheduleSlotClient) {
    //     this._dbClient = sequelizeModel;
    // }

    getById(id: string) {
        return {
            id: id,
            schedule_id: 1,
            slot_id: 1,
            student_id: 1,
            course_id: 1,
            year: '2022',
            day: 'Sunday',
            begin_time: '15:00',
            end_time: '17:00',
            name: 'Vlad',
        };
    }


    create(
        id: string,
        schedule_id: string,
        slot_id: string,
        student_id: string,
        course_id: string,
    ) {
        return {
            id: id,
            schedule_id: schedule_id,
            slot_id: slot_id,
            student_id: student_id,
            course_id: course_id,
            year: '2022',
            day: 'Sunday',
            begin_time: '15:00',
            end_time: '17:00',
            name: 'Vlad',
            course_name: 'Physics',
        };
    }

    delete(id: string) {
        return {
            id: id,
            schedule_id: 1,
            slot_id: 1,
            student_id: 1,
            course_id: 1,
            year: '2022',
            day: 'Sunday',
            begin_time: '15:00',
            end_time: '17:00',
            name: 'Vlad',
            course_name: 'Physics',
        };
    }

    update(
        id: string,
        schedule_id: string,
        slot_id: string,
        student_id: string,
        course_id: string,
    ) {
        return {
            id: id,
            schedule_id: schedule_id,
            slot_id: slot_id,
            student_id: student_id,
            course_id: course_id,
            year: '2022',
            day: 'Sunday',
            begin_time: '15:00',
            end_time: '17:00',
            name: 'Vlad',
            course_name: 'Physics',
        };
    }
}

export { ScheduleSlotRepository };
