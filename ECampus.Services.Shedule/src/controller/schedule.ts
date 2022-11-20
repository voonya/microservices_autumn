import { Request, Response } from 'express';
import { ScheduleService } from 'services/schedule';
import { HttpStatusCode } from 'constants/enums';

function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

class ScheduleController {
    private scheduleService: ScheduleService;
    private isBroken = false;
    private brokeTimeoutS = 10;

    constructor(scheduleService: ScheduleService) {
        this.scheduleService = scheduleService;
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;

        if (this.isBroken) {
            await sleep(this.brokeTimeoutS * 1000);
        }

        const schedule = await this.scheduleService.getById(id);

        return res.status(HttpStatusCode.OK).json({
            schedule,
        });
    }

    async create(req: Request, res: Response) {
        const { year } = req.body;
        
        if (this.isBroken) {
            await sleep(this.brokeTimeoutS * 1000);
        }

        const schedule = await this.scheduleService.create(year);

        return res.status(HttpStatusCode.CREATED).json({
            schedule,
        });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        if (this.isBroken) {
            await sleep(this.brokeTimeoutS * 1000);
        }

        const deleted = await this.scheduleService.delete(id);

        return res.status(HttpStatusCode.OK).json({
            deleted,
        });
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { year } = req.body;

        if (this.isBroken) {
            await sleep(this.brokeTimeoutS * 1000);
        }

        const updated = await this.scheduleService.update(id, year);

        return res.status(HttpStatusCode.OK).json({
            updated: updated,
        });
    }

    async brokeService(req: Request, res: Response) {
        this.isBroken = true;

        return res.status(HttpStatusCode.OK).json({ message: 'Succesfully broken' });
    }

    async fixService(req: Request, res: Response) {
        this.isBroken = false;

        return res.status(HttpStatusCode.OK).json({ message: 'Succesfully fixed' });
    }
}

export { ScheduleController };
