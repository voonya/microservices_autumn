// export const initDB = async (dbOtions) => {
//     const sequelize = new Sequelize({
//         ...dbOtions,
//         define: {
//             freezeTableName: true,
//             underscored: true,
//             timestamps: false,
//         },
//     });

//     await sequelize.authenticate();

//     ProfileModel.init(ProfileSchema, {
//         sequelize,
//         tableName: 'user',
//         schema: 'userdb',
//         underscored: true,
//     });

//     await sequelize.sync();

//     return {
//         profileDB: ProfileModel,
//     };
// };
