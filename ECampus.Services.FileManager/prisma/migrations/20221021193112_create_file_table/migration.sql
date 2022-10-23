-- CreateTable
CREATE TABLE "File" (
    "id" UUID NOT NULL,
    "filename" VARCHAR(200) NOT NULL,
    "extension" VARCHAR(20) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);
