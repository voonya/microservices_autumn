import { EntityEvents } from "./file";

export interface IProfileData {
    event: EntityEvents;
    date: Date;
    data: {
        id: string
        email: string;
        first_name: string;
        last_name: string;
        birth_date: Date;
        role_id: string;
        group_id?: string;
        department_id?: string;
        avatar_id?: Date;
        token_id?: string;
    }
}