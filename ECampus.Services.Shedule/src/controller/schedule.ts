import { Request, Response } from 'express';
import { ScheduleService } from 'services/schedule';
import { HttpStatusCode } from 'constants/enums';

class ScheduleController {
    private scheduleService: ScheduleService;

    constructor(scheduleService: ScheduleService) {
        this.scheduleService = scheduleService;
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;
        
        const schedule = await this.scheduleService.getById(id);

        return res.status(HttpStatusCode.OK).json({
            schedule,
        });
    }
    
    async create(req: Request, res: Response) {
        const { year } = req.body;
        console.log(req.body);
        const schedule = await this.scheduleService.create(year);

        return res.status(HttpStatusCode.CREATED).json({
            schedule,
        });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const deleted = await this.scheduleService.delete(id);

        return res.status(HttpStatusCode.OK).json({
            deleted,
        });
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { year } = req.body;

        const updated = await this.scheduleService.update(id, year);

        return res.status(HttpStatusCode.OK).json({
            updated: updated,
        });
    }
}

export { ScheduleController };
