import { ScheduleSlotNotFoundError } from 'exceptions';
import { ScheduleSlotRepository } from 'db/repositories';

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

    create(id: string) {
        return id;
    }

    delete(id: string) {
        return id;
    }

    update(id: string) {
        return id;
    }
}

export { ScheduleSlotService };
