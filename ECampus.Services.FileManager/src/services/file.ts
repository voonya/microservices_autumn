import { IFileUpload } from 'constants/types/upload-file';
import { FileNotFoundError, UnsupportedFileExtension, InvalidUUIDError } from 'exceptions';
import { FileRepository } from 'db/repositories';
import { FileExtension } from 'constants/enums';
import path from 'path';
import fs from 'fs';
import { getEnv } from 'helpers';

class FileService {
    private fileRepository: FileRepository;
    private filePath: string;

    constructor(fileRepository: FileRepository) {
        this.filePath = path.resolve(process.cwd(), getEnv('FILEPATH'));
        this.fileRepository = fileRepository;
    }

    async getById(id: string) {
        console.log(this.isValidUUID(id));
        if (!this.isValidUUID(id)) {
            throw new InvalidUUIDError();
        }
        const file = await this.fileRepository.getById(id);

        if (!file) {
            throw new FileNotFoundError();
        }

        const filename = `${file.id}.${file.extension}`;
        const filePath = path.resolve(
            process.cwd(),
            getEnv('FILEPATH'),
            filename,
        );

        if (!this.isFileExist(filePath)) {
            throw new FileNotFoundError();
        }

        return filePath;
    }

    async create(files: IFileUpload[]) {
        this.validateFilesExtensions(files);

        const createdFiles = [];

        for (const file of files) {
            const splitedName = file.originalname.split('.');
            const extension = splitedName[splitedName.length - 1];
            const fileObj = {
                filename: file.originalname,
                extension,
            };

            const createdFile = await this.fileRepository.create(fileObj);

            const filename = `${createdFile.id}.${extension}`;
            fs.writeFileSync(
                path.resolve(process.cwd(), this.filePath, filename),
                file.buffer,
            );

            createdFiles.push(createdFile);
        }

        return createdFiles;
    }

    async delete(id: string) {
        if (!this.isValidUUID(id)) {
            throw new InvalidUUIDError();
        }

        const file = await this.fileRepository.getById(id);

        if (!file) {
            throw new FileNotFoundError();
        }

        const filename = `${file.id}.${file.extension}`;
        if (!this.isFileExist(filename)) {
            throw new FileNotFoundError();
        }

        const deletedFile = await this.fileRepository.delete(id);

        fs.unlink(
            path.resolve(process.cwd(), this.filePath, filename),
            () => { },
        );

        if (!deletedFile) {
            throw new Error('Unsuccessful delete!');
        }

        return file;
    }

    // update(id: string) {
    //     return id;
    // }

    private validateFilesExtensions(files: IFileUpload[]) {
        for (const file of files) {
            if (!this.isValidFileExtension(file.mimetype.split('/')[1])) {
                throw new UnsupportedFileExtension();
            }
        }
    }

    private isValidFileExtension(extension: string) {
        return Object.values(FileExtension).includes(
            extension as unknown as FileExtension,
        );
    }

    private isFileExist(filename: string) {
        return fs.existsSync(path.resolve(this.filePath, filename));
    }

    private isValidUUID(uuid: string) {
        const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
        return regexExp.test(uuid); // true
    }
}

export { FileService };
