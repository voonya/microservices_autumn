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

    async create(login: string, password: string, first_name: string, last_name: string, birth_date: Date, role_id: number) {
        await this.profileRepository.createNewUser({login, password, first_name, last_name, birth_date, role_id})
    }

    async delete(id: string) {
        await this.profileRepository.deleteById(id);
    }

    // async changeName(id: string, first_name: string, last_name: string) {
    //     await this.profileRepository.changeName(id, first_name, last_name)
    // }
    //
    // async changeRole(id: string, role_id: string) {
    //     await this.profileRepository.changeRole(id, role_id)
    // }
    //
    // async changeGroup(id: string, group_id: string) {
    //     await this.profileRepository.changeGroup(id, group_id)
    // }
    //
    // async changeDepartment(id: string, department_id: string) {
    //     await this.profileRepository.changeDepartment(id, department_id)
    // }
    //
    // async changeAvatar(id: string, avatar_id: Date) {
    //     await this.profileRepository.changeAvatar(id, avatar_id)
    // }
}

export { ProfileService };
