import { ProfileController } from './profile';

const initControllers = ({ profileService }) => {
    return {
        profileController: new ProfileController(profileService),
    };
};

export { initControllers, ProfileController };
