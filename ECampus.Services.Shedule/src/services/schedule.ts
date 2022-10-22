import { ScheduleNotFoundError } from 'exceptions';
import { ScheduleRepository } from 'db/repositories/schedule';
import crypto from 'crypto';

class ScheduleService {
    private scheduleRepository: ScheduleRepository;

    constructor(scheduleRepository: ScheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }

    async getById(id: string) {
        const schedule = await this.scheduleRepository.getById(id);

        if (!schedule) {
            throw new ScheduleNotFoundError();
        }

        return schedule;
    }


    async create(year: number) {
        const id = crypto.randomUUID();
        const schedule = await this.scheduleRepository.create(id, year);
        console.log(schedule);
        return schedule;
    }

    async delete(id: string) {
        const deleted = await this.scheduleRepository.delete(id);
        return deleted;
    }

    async update(id: string, year: number) {
        const updated = await this.scheduleRepository.update(id, year);
        return updated;
    }
}

export { ScheduleService };
