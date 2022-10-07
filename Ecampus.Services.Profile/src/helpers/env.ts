type ProccesEnvKey = 'PORT';

type DBEnvKey =
    | 'DATABASE'
    | 'DB_USERNAME'
    | 'DB_PASSWORD'
    | 'DB_HOST'
    | 'DB_PORT'
    | 'DB_DIALECT';

type EnvKeys = ProccesEnvKey | DBEnvKey;

export const getEnv = (key: EnvKeys): string => process.env[key];
