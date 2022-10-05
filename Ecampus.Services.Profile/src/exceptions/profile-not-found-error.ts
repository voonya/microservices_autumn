import { HttpError } from './http-error';
import { HttpStatusCode } from 'constants/enums';

class ProfileNotFoundError extends HttpError {
    constructor() {
        super({
            status: HttpStatusCode.NOT_FOUND,
            message: 'Profile was not found!',
        });
    }
}

export { ProfileNotFoundError };
