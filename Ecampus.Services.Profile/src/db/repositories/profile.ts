import { ProfileModel } from 'db/schemas';

type ProfileClient = typeof ProfileModel;

class ProfileRepository {
    private _dbClient: ProfileClient;

    constructor(sequelizeModel: ProfileClient) {
        this._dbClient = sequelizeModel;
    }

    getById(id: string) {
        return this._dbClient.findOne({where: { id }, raw: true });
    }

    createNewUser(data) {
        return this._dbClient.create(data)
    }

    deleteById(id: string) {
        return this._dbClient.destroy({where: { id }})
    }

    changeName(id: string, first_name: string, last_name: string) {
        return this._dbClient.update({first_name: first_name, last_name: last_name}, {where: { id }})
    }

    changeRole(id:string, role_id:string) {
        return this._dbClient.update({role_id: role_id}, {where: { id }})
    }

    changeGroup(id: string, group_id: string) {
        return this._dbClient.update({group_id: group_id}, {where: { id }})
    }

    changeDepartment(id: string, department_id: string) {
        return this._dbClient.update({department_id: department_id}, {where: { id }})
    }

    changeAvatar(id: string, avatar_id: Date) {
        return this._dbClient.update({avatar_id: avatar_id}, {where: { id }})
    }
}

export { ProfileRepository };
