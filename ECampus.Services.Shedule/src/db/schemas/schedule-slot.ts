import { DataTypes, Model } from 'sequelize';

export interface ScheduleSlotAttributes {
    id: string;
    schedule_id: string;
    slot_id: string;
    student_id: string;
    course_id: string;
}

export class ScheduleSlotModel
    extends Model<ScheduleSlotAttributes, ScheduleSlotAttributes>
    implements ScheduleSlotAttributes
{
    public id!: string;
    public schedule_id!: string;
    public slot_id!: string;
    public student_id!: string;
    public course_id!: string;
}

export const ScheduleSlotSchema = {
    id: {
        type: DataTypes.TEXT,
        primaryKey: true,
        allowNull: false,
    },
    schedule_id: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    slot_id: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    student_id: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    course_id: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
};
