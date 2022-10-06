import { SlotNotFoundError } from 'exceptions';
import { SlotRepository } from 'db/repositories/slot';
import crypto from 'crypto';

class SlotService {
    private slotRepository: SlotRepository;

    constructor(slotRepository: SlotRepository) {
        this.slotRepository = slotRepository;
    }

    async getById(id: string) {
        const slot = await this.slotRepository.getById(id);

        if (!slot) {
            throw new SlotNotFoundError();
        }

        return slot;
    }

    async create(
        day: string,
        begin_time: Date,
        end_time: Date
    ) {
        const id = crypto.randomUUID();
        const slot = await this.slotRepository.create(
            id,
            day,
            begin_time,
            end_time
        );
        return slot;
    }

    async delete(id: string) {
        const slot = await this.slotRepository.delete(id);
        return slot;
    }

    async update(
        id: string,
        day: string,
        begin_time: Date,
        end_time: Date
    ) {
        const slot = await this.slotRepository.update(
            id,
            day,
            begin_time,
            end_time
        );
        return slot;
    }
}

export { SlotService };
