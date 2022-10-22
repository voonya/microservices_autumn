import { ScheduleSlotModel } from 'db/schemas/schedule-slot';

type ScheduleSlotClient = typeof ScheduleSlotModel;

class ScheduleSlotRepository {
    private _dbClient: ScheduleSlotClient;

    constructor(sequelizeModel: ScheduleSlotClient) {
        this._dbClient = sequelizeModel;
    }

    getById(id: string) {
        return this._dbClient.findOne({ where: { id }, raw: true });
    }

    create(
        id: string,
        schedule_id: string,
        slot_id: string,
        student_id: string,
        course_id: string,
    ) {
        return this._dbClient.create({
            id: id,
            schedule_id: schedule_id,
            slot_id: slot_id,
            student_id: student_id,
            course_id: course_id,
        }, { raw: true });
    }

    delete(id: string) {
        return this._dbClient.destroy({
            where: {
                id: id,
            },
        });
    }

    update(
        id: string,
        schedule_id: string,
        slot_id: string,
        student_id: string,
        course_id: string,
    ) {
        return this._dbClient.update(
            {
                schedule_id: schedule_id,
                slot_id: slot_id,
                student_id: student_id,
                course_id: course_id,
            },
            {
                where: {
                    id: id,
                },
            },
        );
    }
}

export { ScheduleSlotRepository };
