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
        const profile = this.profileService.create('New profile');

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

    update(req: Request, res: Response) {
        const { id } = req.params;

        const profile = this.profileService.update(id);

        return res.status(HttpStatusCode.OK).json({
            profile,
        });
    }
}

export { ProfileController };
