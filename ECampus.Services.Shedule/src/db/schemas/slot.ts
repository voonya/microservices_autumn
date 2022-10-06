import { DataTypes, Model } from 'sequelize';

export interface SlotAttributes {
    id: string;
    day: string;
    begin_time: Date;
    end_time: Date;
}


export class SlotModel
    extends Model<SlotAttributes, SlotAttributes>
    implements SlotAttributes
{
    public id!: string;
    public day!: string;
    public begin_time!: Date;
    public end_time!: Date;
}

export const SlotSchema = {
    id: {
        type: DataTypes.TEXT,
        primaryKey: true,
        allowNull: false,
    },
    day: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    begin_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
};