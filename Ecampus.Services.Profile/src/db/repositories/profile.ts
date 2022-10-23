import { User } from 'constants/types';
import type { PrismaClient } from '@prisma/client';

class ProfileRepository {
    private _dbClient: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this._dbClient = prismaClient;
    }

    getById(id: string) {
        return this._dbClient.user.findFirst({ where: { id } });
    }

    createNewUser(data) {
        return this._dbClient.user.create(data)
    }

    deleteById(id: string) {
        return this._dbClient.user.delete({where: { id }})
    }

    // changeName(id: string, first_name: string, last_name: string) {
    //     return this._dbClient.user.update({
    //         where: {
    //             id: id
    //         },
    //         data: {
    //             first_name: first_name,
    //             last_name: last_name
    //         }
    //     })
    // }

    // changeRole(id:string, role_id:string) {
    //     return this._dbClient.user.update({role_id: role_id}, {where: { id }})
    // }
    //
    // changeGroup(id: string, group_id: string) {
    //     return this._dbClient.user.update({group_id: group_id}, {where: { id }})
    // }
    //
    // changeDepartment(id: string, department_id: string) {
    //     return this._dbClient.user.update({department_id: department_id}, {where: { id }})
    // }
    //
    // changeAvatar(id: string, avatar_id: Date) {
    //     return this._dbClient.user.update({avatar_id: avatar_id}, {where: { id }})
    // }
}

export { ProfileRepository };
