import { ScheduleSlotNotFoundError } from 'exceptions';
import { ScheduleSlotRepository } from 'db/repositories/schedule-slot';
import crypto from 'crypto';
import axios from 'axios';

class ScheduleSlotService {
    private scheduleSlotRepository: ScheduleSlotRepository;

    constructor(scheduleSlotRepository: ScheduleSlotRepository) {
        this.scheduleSlotRepository = scheduleSlotRepository;
    }

    async getById(id: string) {
        console.log("---------profile------------")
        const scheduleSlot = await this.scheduleSlotRepository.getById(id);
        if (!scheduleSlot) {
            throw new ScheduleSlotNotFoundError();
        }
        let profile;
        await axios.get(`http://profile-service/api/profile/${scheduleSlot.student_id}`)
        .then(function (response) {
            // handle success
            profile = response.data.profile;
        })
        .catch(function (error) {
            console.log('Error');

            console.log(error);
            if (error?.response?.status === 404) {
                return { message: 'Success!' }
            }
        })
        .finally(function () {
            // always executed
        });
        let fullScheduleSlot = {...scheduleSlot, student_name: profile.first_name, student_surname: profile.last_name};
        return fullScheduleSlot;
    }

    async create(
        schedule_id: string,
        slot_id: string,
        student_id: string,
        course_id: string,
    ) {
        const id = crypto.randomUUID();
        const scheduleSlot = await this.scheduleSlotRepository.create({
            id,
            schedule_id,
            slot_id,
            student_id,
            course_id,
        });
        return scheduleSlot;
    }

    async delete(id: string) {
        const scheduleSlot = await this.scheduleSlotRepository.delete(id);
        return scheduleSlot;
    }

    async update(
        id: string,
        schedule_id: string,
        slot_id: string,
        student_id: string,
        course_id: string,
    ) {
        const scheduleSlot = await this.scheduleSlotRepository.update({
            id,
            schedule_id,
            slot_id,
            student_id,
            course_id,
        });
        return scheduleSlot;
    }
}

export { ScheduleSlotService };
