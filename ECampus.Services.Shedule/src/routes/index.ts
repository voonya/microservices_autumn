import { wrap } from 'helpers/request';
import { Router } from 'express';
import {
    ScheduleManagerRoutes,
    SCHEDULE_MANAGER_BASE_ROUTE,
} from 'constants/enums/routes';
import { ScheduleSlotController } from 'controller';

interface InitRoutesProps {
    scheduleSlotController: ScheduleSlotController;
}

const initRoutes = ({ scheduleSlotController }: InitRoutesProps) => {
    const routes = Router();

    routes.get(
        SCHEDULE_MANAGER_BASE_ROUTE + ScheduleManagerRoutes.GET_SCHEDULESLOT,
        wrap(scheduleSlotController.getById.bind(scheduleSlotController)),
    );

    routes.post(
        SCHEDULE_MANAGER_BASE_ROUTE + ScheduleManagerRoutes.CREATE_SCHEDULESLOT,
        scheduleSlotController.create.bind(scheduleSlotController),
    );

    routes.delete(
        SCHEDULE_MANAGER_BASE_ROUTE + ScheduleManagerRoutes.DELETE_SCHEDULESLOT,
        scheduleSlotController.delete.bind(scheduleSlotController),
    );

    routes.put(
        SCHEDULE_MANAGER_BASE_ROUTE + ScheduleManagerRoutes.UPDATE_SCHEDULESLOT,
        scheduleSlotController.update.bind(scheduleSlotController),
    );

    return routes;
};

export { initRoutes };
