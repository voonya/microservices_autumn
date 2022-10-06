import { HttpError } from './http-error';
import { HttpStatusCode } from 'constants/enums';

class SlotNotFoundError extends HttpError {
    constructor() {
        super({
            status: HttpStatusCode.NOT_FOUND,
            message: 'Slot slot was not found!',
        });
    }
}

export { SlotNotFoundError };
