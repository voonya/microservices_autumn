import { initDB } from 'db';
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import { initRoutes } from 'routes';
import { errorHandler } from 'middlewares';
import { initRepositories } from 'db/repositories';
import { initServices } from 'services';
import { initControllers } from 'controller';
import { getEnv } from 'helpers';

import * as dotenv from 'dotenv';
dotenv.config();

const PORT = Number(getEnv('PORT') || 8080);

// const DB_OPTIONS = {
//     database: getEnv('DATABASE'),
//     username: getEnv('DB_USERNAME'),
//     password: getEnv('DB_PASSWORD'),
//     host: getEnv('DB_HOST'),
//     port: Number(getEnv('DB_PORT')),
//     dialect: getEnv('DB_DIALECT'),
// };

const main = async () => {
    const dbs = await initDB();

    const repositories = initRepositories(dbs);

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
