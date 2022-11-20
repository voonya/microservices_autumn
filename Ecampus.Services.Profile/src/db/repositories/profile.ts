import { user } from 'constants/types';
import type { PrismaClient } from '@prisma/client';

class ProfileRepository {
    private _dbClient: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this._dbClient = prismaClient;
    }

    async getById(id: string) {
        return this._dbClient.user.findFirst({ where: { id } });
    }

    async getByLogin(login: string) {
        return this._dbClient.user.findFirst({ where: { login } });
    }

    getAll() {
        return this._dbClient.user.findMany();
    }

    createNewUser({login, password, first_name, last_name, birth_date, role_id}) {
        return this._dbClient.user.create({
            data: {
                login: login,
                password: password,
                first_name: first_name,
                last_name: last_name,
                birth_date: birth_date,
                role_id: role_id
            }
        })
    }

    deleteById(id: string) {
        return this._dbClient.user.delete({ where: { id }})
    }

    changeName(id: string, first_name: string, last_name: string) {
        return this._dbClient.user.update({
            where: {
                id: id
            },
            data: {
                first_name: first_name,
                last_name: last_name,
            }
        })
    }

    changePassword(id: string, password: string) {
        return this._dbClient.user.update({
            where: {
                id: id
            },
            data: {
                password: password
            }
        })
    }

    changeRole(id:string, role_id:string) {
        return this._dbClient.user.update({where: {
                id: id
            },
            data: {
                role_id: role_id
            }
        })
    }

    changeGroup(id: string, group_id: string) {
        return this._dbClient.user.update({where: {
                id: id
            },
            data: {
                group_id: group_id
            }
        })
    }

    changeDepartment(id: string, department_id: string) {
        return this._dbClient.user.update({where: {
                id: id
            },
            data: {
                department_id: department_id
            }
        })
    }

    changeAvatar(id: string, avatar_id: string) {
        return this._dbClient.user.update({where: {
                id: id
            },
            data: {
                avatar_id: avatar_id
            }
        })
    }
}

export { ProfileRepository };
