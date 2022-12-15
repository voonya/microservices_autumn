import express, { json, urlencoded } from 'express';
import cors from 'cors';
import { initRoutes } from 'routes';
import { errorHandler } from 'middlewares';
import { initRepositories } from 'db/repositories';
import { initServices } from 'services';
import { initControllers } from 'controller';
import { getEnv } from 'helpers';

import { PrismaClient } from '@prisma/client';

import * as dotenv from 'dotenv';

dotenv.config();

const PORT = getEnv('PORT') || 8080;

console.log(process.env)

const main = async () => {

    const prismaClient = new PrismaClient();

    const repositories = initRepositories(prismaClient);

    const services = initServices(repositories);

    const controllers = initControllers(services);

    const routes = initRoutes(controllers);

    const app = express();

    app.use(cors())
        .use(json())
        .use(urlencoded({ extended: true }))
        .use(routes)
        .use(errorHandler)
        .listen(PORT, () => {
            console.log('Server listening on PORT', PORT);
        });
};

main();
