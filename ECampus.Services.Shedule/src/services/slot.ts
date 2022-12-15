import { SlotNotFoundError } from 'exceptions';
import { SlotRepository } from 'db/repositories/slot';
import crypto from 'crypto';
import { Kafka } from 'kafkajs';


const kafka = new Kafka({
    clientId: 'schedule-manager',
    brokers: ['kafka:9092'],
    connectionTimeout: 100000,
    retry: {
        initialRetryTime: 10000,
        retries: 10
    }
})

const producer = kafka.producer();
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

        producer.connect().then(() => {
            producer.send({
                topic: 'schedule',
                messages: [
                    { value: JSON.stringify({ event: 'GETED', date: new Date(), data: slot }) },
                ],
            })
        });
        
        return slot;
    }

    async create(day: string, begin_time: Date, end_time: Date) {
        const id = crypto.randomUUID();
        const slot = await this.slotRepository.create({
            id,
            day,
            begin_time: new Date("1970-01-01, " + begin_time),
            end_time: new Date("1970-01-01, " + end_time)
        });

        producer.connect().then(() => {
            producer.send({
                topic: 'schedule',
                messages: [
                    { value: JSON.stringify({ event: 'CREATED', date: new Date(), data: slot }) },
                ],
            })
        });

        return slot;
    }

    async delete(id: string) {
        const slot = await this.slotRepository.delete(id);
        producer.connect().then(() => {
            producer.send({
                topic: 'schedule',
                messages: [
                    { value: JSON.stringify({ event: 'DELETED', date: new Date(), data: slot }) },
                ],
            })
        });
        return slot;
    }

    async update(id: string, day: string, begin_time: Date, end_time: Date) {
        const slot = await this.slotRepository.update({
            id,
            day,
            begin_time: new Date("1970-01-01, " + begin_time),
            end_time: new Date("1970-01-01, " + end_time)
        });
        producer.connect().then(() => {
            producer.send({
                topic: 'schedule',
                messages: [
                    { value: JSON.stringify({ event: 'UPDATED', date: new Date(), data: slot }) },
                ],
            })
        });
        return slot;
    }
}

export { SlotService };
