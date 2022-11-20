import { wrap } from 'helpers/request';
import { Router } from 'express';
import {
    ScheduleManagerRoutes,
    ScheduleSlotManagerRoutes,
    SlotManagerRoutes,
    SCHEDULE_MANAGER_BASE_ROUTE,
} from 'constants/enums/routes';
import {
    ScheduleController,
    ScheduleSlotController,
    SlotController,
} from 'controller';

interface InitRoutesProps {
    scheduleController: ScheduleController;
    scheduleSlotController: ScheduleSlotController;
    slotController: SlotController;
}

const initRoutes = ({
    scheduleController,
    scheduleSlotController,
    slotController,
}: InitRoutesProps) => {
    const routes = Router();

    routes.get(
        SCHEDULE_MANAGER_BASE_ROUTE + ScheduleManagerRoutes.GET_SCHEDULE,
        wrap(scheduleController.getById.bind(scheduleController)),
    );

    routes.post(
        SCHEDULE_MANAGER_BASE_ROUTE + ScheduleManagerRoutes.CREATE_SCHEDULE,
        scheduleController.create.bind(scheduleController),
    );

    routes.delete(
        SCHEDULE_MANAGER_BASE_ROUTE + ScheduleManagerRoutes.DELETE_SCHEDULE,
        scheduleController.delete.bind(scheduleController),
    );

    routes.put(
        SCHEDULE_MANAGER_BASE_ROUTE + ScheduleManagerRoutes.UPDATE_SCHEDULE,
        scheduleController.update.bind(scheduleController),
    );

    routes.get(
        SCHEDULE_MANAGER_BASE_ROUTE +
            ScheduleSlotManagerRoutes.GET_SCHEDULESLOT,
        wrap(scheduleSlotController.getById.bind(scheduleSlotController)),
    );

    routes.post(
        SCHEDULE_MANAGER_BASE_ROUTE +
            ScheduleSlotManagerRoutes.CREATE_SCHEDULESLOT,
        scheduleSlotController.create.bind(scheduleSlotController),
    );

    routes.delete(
        SCHEDULE_MANAGER_BASE_ROUTE +
            ScheduleSlotManagerRoutes.DELETE_SCHEDULESLOT,
        scheduleSlotController.delete.bind(scheduleSlotController),
    );

    routes.put(
        SCHEDULE_MANAGER_BASE_ROUTE +
            ScheduleSlotManagerRoutes.UPDATE_SCHEDULESLOT,
        scheduleSlotController.update.bind(scheduleSlotController),
    );

    routes.get(
        SCHEDULE_MANAGER_BASE_ROUTE + SlotManagerRoutes.GET_SLOT,
        wrap(slotController.getById.bind(slotController)),
    );

    routes.post(
        SCHEDULE_MANAGER_BASE_ROUTE + SlotManagerRoutes.CREATE_SLOT,
        slotController.create.bind(slotController),
    );

    routes.delete(
        SCHEDULE_MANAGER_BASE_ROUTE + SlotManagerRoutes.DELETE_SLOT,
        slotController.delete.bind(slotController),
    );

    routes.put(
        SCHEDULE_MANAGER_BASE_ROUTE + SlotManagerRoutes.UPDATE_SLOT,
        slotController.update.bind(slotController),
    );

    routes.post(
        SCHEDULE_MANAGER_BASE_ROUTE + ScheduleManagerRoutes.BROKE,
        wrap(scheduleController.brokeService.bind(scheduleController)),
    );

    routes.post(
        SCHEDULE_MANAGER_BASE_ROUTE + ScheduleManagerRoutes.FIX,
        wrap(scheduleController.fixService.bind(scheduleController)),
    );


    return routes;
};

export { initRoutes };
