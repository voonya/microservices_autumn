// import { Sequelize } from 'sequelize';
// import { ScheduleSchema, ScheduleModel } from './schemas/schedule';
// import { ScheduleSlotSchema, ScheduleSlotModel } from './schemas/schedule-slot';
// import { SlotSchema, SlotModel } from './schemas/slot';

// export const initDB = async (dbOtions) => {
//     const sequelize = new Sequelize({
//         ...dbOtions,
//         dialectOptions: {
//             ssl: {
//                 require: true,
//                 rejectUnauthorized: false,
//             },
//         },
//         define: {
//             freezeTableName: true,
//             underscored: true,
//             timestamps: false,
//         },
//     });

//     await sequelize.authenticate();

//     ScheduleModel.init(ScheduleSchema, {
//         sequelize,
//         tableName: 'schedule',
//         schema: 'scheduledb',
//         underscored: true,
//     });

//     ScheduleSlotModel.init(ScheduleSlotSchema, {
//         sequelize,
//         tableName: 'scheduleslot',
//         schema: 'scheduledb',
//         underscored: true,
//     });

//     SlotModel.init(SlotSchema, {
//         sequelize,
//         tableName: 'slot',
//         schema: 'scheduledb',
//         underscored: true,
//     });

//     await sequelize.sync();

//     return {
//         scheduleDB: ScheduleModel,
//         scheduleSlotDB: ScheduleSlotModel,
//         slotDB: SlotModel,
//     };
// };
