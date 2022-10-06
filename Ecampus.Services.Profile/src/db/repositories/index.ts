import { ProfileRepository } from './profile';

const initRepositories = ({ profileDB }) => {
    return {
        profileRepository: new ProfileRepository(profileDB),
    };
};

export { initRepositories, ProfileRepository };
