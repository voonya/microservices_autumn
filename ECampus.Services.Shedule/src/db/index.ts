import { Sequelize } from 'sequelize';
import { ScheduleSchema, ScheduleModel } from './schemas/schedule';
import { ScheduleSlotSchema, ScheduleSlotModel } from './schemas/schedule-slot';
import { SlotSchema, SlotModel } from './schemas/slot';

export const initDB = async (dbOtions) => {
    const sequelize = new Sequelize("postgresql://doadmin:AVNS_xbofXauyxZIKlYYjKLl@db-postgresql-fra1-55914-do-user-12560019-0.b.db.ondigitalocean.com:25060/defaultdb");

    console.log("auth begin");
    await sequelize.authenticate();
    console.log("auth end");

    ScheduleModel.init(ScheduleSchema, {
        sequelize,
        tableName: 'schedule',
        schema: 'scheduledb',
        underscored: true,
    });

    ScheduleSlotModel.init(ScheduleSlotSchema, {
        sequelize,
        tableName: 'scheduleslot',
        schema: 'scheduledb',
        underscored: true,
    });

    SlotModel.init(SlotSchema, {
        sequelize,
        tableName: 'slot',
        schema: 'scheduledb',
        underscored: true,
    });

    await sequelize.sync();

    return {
        scheduleDB: ScheduleModel,
        scheduleSlotDB: ScheduleSlotModel,
        slotDB: SlotModel,
    };
};
