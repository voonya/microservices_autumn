import { Request, Response } from 'express';
import { SlotService } from 'services/slot';
import { HttpStatusCode } from 'constants/enums';

class SlotController {
    private slotService: SlotService;

    constructor(slotService: SlotService) {
        this.slotService = slotService;
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;

        const slot = await this.slotService.getById(id);

        return res.status(HttpStatusCode.OK).json({
            slot,
        });
    }

    async create(req: Request, res: Response) {
        const { day, begin_time, end_time } = req.body;
        const slot = await this.slotService.create(day, begin_time, end_time);

        return res.status(HttpStatusCode.CREATED).json({
            slot,
        });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const slot = await this.slotService.delete(id);

        return res.status(HttpStatusCode.OK).json({
            slot,
        });
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { day, begin_time, end_time } = req.body;

        const slot = await this.slotService.update(
            id,
            day,
            begin_time,
            end_time,
        );

        return res.status(HttpStatusCode.OK).json({
            slot,
        });
    }
}

export { SlotController };
