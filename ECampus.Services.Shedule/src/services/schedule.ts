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
        const id = '1';
        const schedule = await this.scheduleRepository.create(id, year);
        console.log(schedule);
        return schedule;
    }

    async delete(id: string) {
        const schedule = await this.scheduleRepository.delete(id);
        return schedule;
    }

    async update(id: string, year: number) {
        const schedule = await this.scheduleRepository.update(id, year);
        return schedule;
    }
}

export { ScheduleService };
