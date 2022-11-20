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

    async getByLogin(login: string) {
        const user = await this.profileRepository.getByLogin(login);

        if (!user) {
            throw new ProfileNotFoundError();
        }

        return user;
    }

    async getAll() {
        const profile = await this.profileRepository.getAll();

        if (!profile) {
            throw new ProfileNotFoundError();
        }

        return profile;
    }

    async create(login: string, password: string, first_name: string, last_name: string, birth_date: Date, role_id: number) {
        return await this.profileRepository.createNewUser({
            login: login,
            password: password,
            first_name: first_name,
            last_name: last_name,
            birth_date: birth_date,
            role_id: role_id
        })
    }

    async delete(id: string) {
        return await this.profileRepository.deleteById(id);
    }

    async changeName(id: string, first_name: string, last_name: string) {
        return await this.profileRepository.changeName(id, first_name, last_name)
    }

    async changePassword(id: string, password: string) {
        return await this.profileRepository.changePassword(id, password)
    }

    async changeRole(id: string, role_id: string) {
        return await this.profileRepository.changeRole(id, role_id)
    }

    async changeGroup(id: string, group_id: string) {
        return await this.profileRepository.changeGroup(id, group_id)
    }

    async changeDepartment(id: string, department_id: string) {
        return await this.profileRepository.changeDepartment(id, department_id)
    }

    async changeAvatar(id: string, avatar_id: Date) {
        return await this.profileRepository.changeAvatar(id, avatar_id)
    }
}

export { ProfileService };
