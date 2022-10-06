import { HttpError } from './http-error';
import { HttpStatusCode } from 'constants/enums';

class ScheduleNotFoundError extends HttpError {
    constructor() {
        super({
            status: HttpStatusCode.NOT_FOUND,
            message: 'Schedule slot was not found!',
        });
    }
}

export { ScheduleNotFoundError };
