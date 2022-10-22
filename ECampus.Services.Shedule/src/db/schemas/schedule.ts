import { DataTypes, Model } from 'sequelize';

export interface ScheduleAttributes {
    id: string;
    year: number;
}

export class ScheduleModel
    extends Model<ScheduleAttributes, ScheduleAttributes>
    implements ScheduleAttributes
{
    public id!: string;
    public year!: number;
}

export const ScheduleSchema = {
    id: {
        type: DataTypes.TEXT,
        primaryKey: true,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
};
