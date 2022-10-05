import { Sequelize } from 'sequelize';
import { ScheduleSlotSchema, ScheduleSlotModel } from './schemas/shedule-slot';

export const initDB = async (dbOtions) => {
    const sequelize = new Sequelize({
        ...dbOtions,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
        define: {
            freezeTableName: true,
            underscored: true,
            timestamps: false,
        },
    });

    await sequelize.authenticate();

    ScheduleSlotModel.init(ScheduleSlotSchema, {
        sequelize,
        tableName: 'scheduleslot',
        schema: 'scheduledb',
        underscored: true,
    });

    await sequelize.sync();

    return {
        scheduleDB: ScheduleSlotModel,
    };
};
