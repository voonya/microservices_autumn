import { Sequelize } from 'sequelize';
import { FileSchema, FileModel } from './schemas';

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

    FileModel.init(FileSchema, {
        sequelize,
        tableName: 'file',
        schema: 'filedb',
        underscored: true,
    });

    await sequelize.sync();

    return {
        fileDB: FileModel,
    };
};
