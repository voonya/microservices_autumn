import { ProfileRepository } from './profile';
import type {PrismaClient} from '@prisma/client'

const initRepositories = (prismaClient: PrismaClient) => {
    return {
        profileRepository: new ProfileRepository(prismaClient),
    };
};

export { initRepositories, ProfileRepository };
