export interface user {
    id: string;
    login: string;
    password: string;
    first_name: string;
    last_name: string;
    birth_date: Date;
    role_id: string;
    group_id?: string;
    department_id?: string;
    avatar_id?: Date;
    token_id?: string;
}