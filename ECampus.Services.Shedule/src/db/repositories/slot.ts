import type { PrismaClient } from '@prisma/client';
import { Slot } from 'constants/types/slot';

class SlotRepository {
    private _dbClient: PrismaClient;

    constructor(sequelizeModel: PrismaClient) {
        this._dbClient = sequelizeModel;
    }

    getById(id: string) {
        return this._dbClient.slot.findFirst({ where: { id } });
    }

    create(slot: Slot) {
        console.log(slot)
        return this._dbClient.slot.create({
            data: slot,
        });
    }

    delete(id: string) {
        return this._dbClient.slot.delete({
            where: {
                id: id,
            },
        });
    }

    update(slot: Slot) {
        return this._dbClient.slot.update({
            where: {
                id: slot.id,
            },
            data: slot,
        });
    }
}

export { SlotRepository };
