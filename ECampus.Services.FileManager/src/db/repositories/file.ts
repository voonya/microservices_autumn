import { FileModel } from 'db/schemas';

type FileClient = typeof FileModel;

class FileRepository {
    private _dbClient: FileClient;

    // constructor(sequelizeModel: FileClient) {
    //     this._dbClient = sequelizeModel;
    // }

    getById(id: string) {
        return id;
        //return this._dbClient.findOne({ where: { id }, raw: true });
    }
}

export { FileRepository };
