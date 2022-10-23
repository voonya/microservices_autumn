-- CreateTable
CREATE TABLE "schedule" (
    "id" UUID NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "slot" (
    "id" UUID NOT NULL,
    "day" VARCHAR(10) NOT NULL,
    "begin_time" TIME NOT NULL,
    "end_time" TIME NOT NULL,

    CONSTRAINT "slot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scheduleslot" (
    "id" UUID NOT NULL,
    "schedule_id" UUID NOT NULL,
    "slot_id" UUID NOT NULL,
    "student_id" UUID NOT NULL,
    "course_id" UUID NOT NULL,

    CONSTRAINT "scheduleslot_pkey" PRIMARY KEY ("id")
);
