import { ProfileNotFoundError } from 'exceptions';
import { ProfileRepository } from 'db/repositories';

class ProfileService {
    private profileRepository: ProfileRepository;

    constructor(profileRepository: ProfileRepository) {
        this.profileRepository = profileRepository;
    }

    async getById(id: string) {
        const profile = await this.profileRepository.getById(id);

        if (!profile) {
            throw new ProfileNotFoundError();
        }

        return profile;
    }

    create(id: string) {
        return id;
    }

    delete(id: string) {
        return id;
    }

    update(id: string) {
        return id;
    }
}

export { ProfileService };
