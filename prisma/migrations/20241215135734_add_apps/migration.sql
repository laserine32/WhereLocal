-- CreateTable
CREATE TABLE "Locals" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Locals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Apps" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "Apps_pkey" PRIMARY KEY ("id")
);
