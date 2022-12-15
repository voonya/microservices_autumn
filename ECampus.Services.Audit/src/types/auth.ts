export enum AuthEvents {
    LOGINED = 'LOGINED',
    REGISTERED = 'REGISTERED',
    LOGOUT = 'LOGOUT',
}

export interface IAuthData {
    event: AuthEvents;
    date: Date;
    data: {
        id: string
        username: string;
    }
}