export enum UserRole {
    administrator = 0,
    user = 1
}

export interface IUser {
    mail: string;
    password: string;
    token: string;
    activated: boolean;
    role: UserRole;
}
