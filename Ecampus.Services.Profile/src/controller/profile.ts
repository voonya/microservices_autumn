import { Request, Response } from 'express';
import { ProfileService } from 'services';
import { HttpStatusCode } from 'constants/enums';

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

    create(req: Request, res: Response) {
        const {login, password, first_name, last_name, birth_date, role_id} = req.body
        const profile = this.profileService.create(login, password, first_name, last_name, birth_date, role_id);

        return res.status(HttpStatusCode.CREATED).json({
            profile,
        });
    }

    delete(req: Request, res: Response) {
        const { id } = req.params;

        const profile = this.profileService.delete(id);

        return res.status(HttpStatusCode.OK).json({
            profile,
        });
    }

    // update(req: Request, res: Response) {
    //     const { id } = req.params;
    //     const { first_name, last_name } = req.body
    //
    //     const profile = this.profileService.changeName(id, first_name, last_name);
    //
    //     return res.status(HttpStatusCode.OK).json({
    //         profile,
    //     });
    // }
}

export { ProfileController };
