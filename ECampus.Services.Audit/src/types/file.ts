export enum EntityEvents {
    CREATED = 'CREATED',
    DELETED = 'DELETED',
    UPDATED = 'UPDATED',
    GETED = 'GETED'
}

export interface IFileData {
    event: EntityEvents;
    date: Date;
    data: {
        id: string
        filename: string;
        extension: string;
        created_at?: Date;
        updated_at?: Date;
    }
}