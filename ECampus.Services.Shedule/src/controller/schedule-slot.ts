import { Request, Response } from 'express';
import { ScheduleSlotService } from 'services/schedule-slot';
import { HttpStatusCode } from 'constants/enums';

class ScheduleSlotController {
    private scheduleSlotService: ScheduleSlotService;

    constructor(scheduleSlotService: ScheduleSlotService) {
        this.scheduleSlotService = scheduleSlotService;
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;

        const scheduleSlot = await this.scheduleSlotService.getById(id);

        return res.status(HttpStatusCode.OK).json({
            scheduleSlot,
        });
    }

    create(req: Request, res: Response) {
        const { schedule_id, slot_id, student_id, course_id } = req.body;
        const scheduleSlot = this.scheduleSlotService.create(
            schedule_id,
            slot_id,
            student_id,
            course_id,
        );

        return res.status(HttpStatusCode.CREATED).json({
            scheduleSlot,
        });
    }

    delete(req: Request, res: Response) {
        const { id } = req.params;

        const scheduleSlot = this.scheduleSlotService.delete(id);

        return res.status(HttpStatusCode.OK).json({
            scheduleSlot,
        });
    }

    update(req: Request, res: Response) {
        const { id } = req.params;
        const { schedule_id, slot_id, student_id, course_id } = req.body;

        const scheduleSlot = this.scheduleSlotService.update(
            id,
            schedule_id,
            slot_id,
            student_id,
            course_id,
        );

        return res.status(HttpStatusCode.OK).json({
            scheduleSlot,
        });
    }
}

export { ScheduleSlotController };
