type ProccesEnvKey = 'PORT' | 'BROKE_TIMEOUT';

type FileEnvKey = 'FILEPATH';

type DBEnvKey =
    | 'DATABASE'
    | 'DB_USERNAME'
    | 'DB_PASSWORD'
    | 'DB_HOST'
    | 'DB_PORT'
    | 'DB_DIALECT';

type EnvKeys = ProccesEnvKey | DBEnvKey | FileEnvKey;

export const getEnv = (key: EnvKeys): string => process.env[key];
