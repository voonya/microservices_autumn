import { ScheduleSlotNotFoundError } from 'exceptions';
import { ScheduleSlotRepository } from 'db/repositories/schedule-slot';
import crypto from 'crypto';

class ScheduleSlotService {
    private scheduleSlotRepository: ScheduleSlotRepository;

    constructor(scheduleSlotRepository: ScheduleSlotRepository) {
        this.scheduleSlotRepository = scheduleSlotRepository;
    }

    async getById(id: string) {
        const scheduleSlot = await this.scheduleSlotRepository.getById(id);

        if (!scheduleSlot) {
            throw new ScheduleSlotNotFoundError();
        }

        return scheduleSlot;
    }

    async create(
        schedule_id: string,
        slot_id: string,
        student_id: string,
        course_id: string,
    ) {
        const id = '1';
        const scheduleSlot = await this.scheduleSlotRepository.create(
            id,
            schedule_id,
            slot_id,
            student_id,
            course_id,
        );
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
        const scheduleSlot = await this.scheduleSlotRepository.update(
            id,
            schedule_id,
            slot_id,
            student_id,
            course_id,
        );
        return scheduleSlot;
    }
}

export { ScheduleSlotService };
