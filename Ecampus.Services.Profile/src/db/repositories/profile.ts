import { ProfileModel } from 'db/schemas';

type ProfileClient = typeof ProfileModel;

class ProfileRepository {
    private _dbClient: ProfileClient;

    constructor(sequelizeModel: ProfileClient) {
        this._dbClient = sequelizeModel;
    }

    getById(id: string) {
        return this._dbClient.findOne({ where: { id }, raw: true });
    }
}

export { ProfileRepository };
