import { Request, Response } from 'express';
import { ScheduleSlotService } from 'services';
import { HttpStatusCode } from 'constants/enums';

class ScheduleSlotController {
    private scheduleSlotService: ScheduleSlotService;

    constructor(scheduleSlotService: ScheduleSlotService) {
        this.scheduleSlotService = scheduleSlotService;
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;

        const file = await this.scheduleSlotService.getById(id);

        return res.status(HttpStatusCode.OK).json({
            file,
        });
    }

    create(req: Request, res: Response) {
        const file = this.scheduleSlotService.create('New slot');

        return res.status(HttpStatusCode.CREATED).json({
            file,
        });
    }

    delete(req: Request, res: Response) {
        const { id } = req.params;

        const file = this.scheduleSlotService.delete(id);

        return res.status(HttpStatusCode.OK).json({
            file,
        });
    }

    update(req: Request, res: Response) {
        const { id } = req.params;

        const file = this.scheduleSlotService.update(id);

        return res.status(HttpStatusCode.OK).json({
            file,
        });
    }
}

export { ScheduleSlotController };
