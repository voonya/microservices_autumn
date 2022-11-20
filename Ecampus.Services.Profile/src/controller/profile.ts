import { Request, Response } from 'express';
import { ProfileService } from 'services';
import { HttpStatusCode } from 'constants/enums';
import {UploadFilesRequest} from "../constants/types/upload-file";

class ProfileController {
    private profileService: ProfileService;

    constructor(profileService: ProfileService) {
        this.profileService = profileService;
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;

        const profile = await this.profileService.getById(id);

        return res.status(HttpStatusCode.OK).json({
            profile,
        });
    }

    async getAll(req: Request, res: Response) {
        const profile = await this.profileService.getAll();

        return res.status(HttpStatusCode.OK).json({
            profile,
        });
    }


    async create(req: Request, res: Response) {
        const {login, password, first_name, last_name, birth_date, role_id} = req.body
        const profile = await this.profileService.create(login, password, first_name, last_name, birth_date, role_id);

        return res.status(HttpStatusCode.CREATED).json({
            profile,
        });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const profile = await this.profileService.delete(id);

        return res.status(HttpStatusCode.OK).json({
            profile,
        });
    }

    async updateName(req: Request, res: Response) {
        const { id } = req.params;
        const { first_name, last_name } = req.body

        const profile = await this.profileService.changeName(id, first_name, last_name);

        return res.status(HttpStatusCode.OK).json({
            profile,
        });
    }

    async updatePassword(req: Request, res: Response) {
        const { id } = req.params;
        const { password } = req.body

        const profile = await this.profileService.changePassword(id, password);

        return res.status(HttpStatusCode.OK).json({
            profile,
        });
    }

    async updateRole(req: Request, res: Response) {
        const { id } = req.params;
        const { role_id } = req.body

        const profile = await this.profileService.changeRole(id, role_id);

        return res.status(HttpStatusCode.OK).json({
            profile,
        });
    }

    async updateGroup(req: Request, res: Response) {
        const { id } = req.params;
        const { group_id } = req.body

        const profile = await this.profileService.changeGroup(id, group_id);

        return res.status(HttpStatusCode.OK).json({
            profile,
        });
    }

    async updateDepartment(req: Request, res: Response) {
        const { id } = req.params;
        const { department_id } = req.body

        const profile = await this.profileService.changeDepartment(id, department_id);

        return res.status(HttpStatusCode.OK).json({
            profile,
        });
    }

    async createAvatar(req: UploadFilesRequest, res: Response) {
        const { id } = req.params
        const file = await this.profileService.createAvatar(id, req.file);

        return res.status(HttpStatusCode.OK).json({
            file,
        });
    }
}

export { ProfileController };
