import { DataTypes, Model } from 'sequelize';

export interface ProfileAttributes {
    id: string;
    login: string;
    password: string;
    first_name: string;
    last_name: string;
    birth_date: Date;
    role_id: string;
    group_id: string;
    department_id: string;
    avatar_id: Date;
    token_id: string;
}

export type IngredientInput = Required<ProfileAttributes>;
export type IngredientOuput = Required<ProfileAttributes>;

export class ProfileModel
    extends Model<ProfileAttributes, ProfileAttributes>
    implements ProfileAttributes
{
    public id!: string;
    public login!: string;
    public password!: string;
    public first_name!: string;
    public last_name!: string;
    public birth_date!: Date;
    public role_id!: string;
    public group_id: string;
    public department_id: string;
    public avatar_id: Date;
    public token_id: string;
}

export const ProfileSchema = {
    id: {
        type: DataTypes.TEXT,
        primaryKey: true,
        allowNull: false,
    },
    login: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    first_name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    birth_date: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    role_id: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    group_id: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    department_id: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    avatar_id: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    token_id: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
};
