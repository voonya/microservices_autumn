import { HttpError } from './http-error';
import { HttpStatusCode } from 'constants/enums';

class InvalidUUIDError extends HttpError {
    constructor() {
        super({
            status: HttpStatusCode.BAD_REQUEST,
            message: 'Invalid UUID!',
        });
    }
}

export { InvalidUUIDError };