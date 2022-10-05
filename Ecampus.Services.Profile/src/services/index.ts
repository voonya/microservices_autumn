import { ProfileService } from './profile';

const initServices = ({ profileRepository }) => {
    return {
        profileService: new ProfileService(profileRepository),
    };
};

export { initServices, ProfileService };
