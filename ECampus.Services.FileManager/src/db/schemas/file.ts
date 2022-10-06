import { DataTypes, Model } from 'sequelize';

export interface FileAttributes {
    id: string;
    link: string;
    created_at: Date;
    updated_at: Date;
}

export type IngredientInput = Required<FileAttributes>;
export type IngredientOuput = Required<FileAttributes>;

export class FileModel
    extends Model<FileAttributes, FileAttributes>
    implements FileAttributes
{
    public id!: string;
    public link!: string;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

export const FileSchema = {
    id: {
        type: DataTypes.TEXT,
        primaryKey: true,
        allowNull: false,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
};
