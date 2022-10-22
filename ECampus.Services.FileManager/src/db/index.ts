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

//     FileModel.init(FileSchema, {
//         sequelize,
//         tableName: 'file',
//         schema: 'public',
//         underscored: true,
//     });

//     await sequelize.sync();

//     return {
//         fileDB: FileModel,
//     };
// };
