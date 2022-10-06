import { FileNotFoundError } from 'exceptions';
import { FileRepository } from 'db/repositories';

class FileService {
    private fileRepository: FileRepository;

    constructor(fileRepository: FileRepository) {
        this.fileRepository = fileRepository;
    }

    async getById(id: string) {
        const file = await this.fileRepository.getById(id);

        if (!file) {
            throw new FileNotFoundError();
        }

        return file;
    }

    create(id: string) {
        return id;
    }

    delete(id: string) {
        return id;
    }

    update(id: string) {
        return id;
    }
}

export { FileService };
