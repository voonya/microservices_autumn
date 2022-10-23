-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "login" VARCHAR(200) NOT NULL,
    "password" VARCHAR(200) NOT NULL,
    "first_name" VARCHAR(200) NOT NULL,
    "last_name" VARCHAR(200) NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role_id" TEXT NOT NULL,
    "group_id" TEXT,
    "department_id" TEXT,
    "avatar_id" TIMESTAMP(3),
    "token_id" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
