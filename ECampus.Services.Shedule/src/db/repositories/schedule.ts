// import { ScheduleModel } from 'db/schemas/schedule';

// type ScheduleClient = typeof ScheduleModel;

class ScheduleRepository {
    // private _dbClient: ScheduleClient;

    // constructor(sequelizeModel: ScheduleClient) {
    //     this._dbClient = sequelizeModel;
    // }

    getById(id: string) {
        return {
            id: id,
            year: 2022,
        };
    }

    getByStudentId(id: string) {
        return [
                {
                    id: id,
                    schedule_id: 1,
                    slot_id: 1,
                    student_id: id,
                    course_id: 1,
                    year: '2022',
                    day: 'Sunday',
                    begin_time: '15:00',
                    end_time: '17:00',
                    name: 'Vlad',
                    course_name: 'Physics',
                },
                {
                    id: 2,
                    schedule_id: 1,
                    slot_id: 2,
                    student_id: id,
                    course_id: 3,
                    year: '2022',
                    day: 'Sunday',
                    begin_time: '15:00',
                    end_time: '17:00',
                    name: 'Vlad',
                    course_name: 'Math',
                },
            ];
    }

    create(id: string, year: number) {
        return {
            id: id,
            year: year,
        };
    }

    delete(id: string) {
        return {
            id: id,
            year: 2022,
        };
    }

    update(id: string, year: number) {
        return {
            id: id,
            year: year,
        };
    }
}

export { ScheduleRepository };
