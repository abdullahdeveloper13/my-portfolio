CREATE TYPE "MessageStatus" AS ENUM ('NEW', 'READ', 'REPLIED', 'ARCHIVED');
CREATE TABLE "ContactMessage" (
  "id" TEXT NOT NULL, "name" TEXT NOT NULL, "email" TEXT NOT NULL, "subject" TEXT NOT NULL,
  "message" TEXT NOT NULL, "status" "MessageStatus" NOT NULL DEFAULT 'NEW',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "ContactMessage_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "ContactMessage_status_idx" ON "ContactMessage"("status");
CREATE TABLE "Project" (
  "id" TEXT NOT NULL, "title" TEXT NOT NULL, "slug" TEXT NOT NULL, "description" TEXT NOT NULL,
  "category" TEXT NOT NULL, "liveUrl" TEXT NOT NULL, "githubUrl" TEXT, "featured" BOOLEAN NOT NULL DEFAULT true,
  "sortOrder" INTEGER NOT NULL DEFAULT 0, "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL, CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");
CREATE TABLE "Technology" (
  "id" TEXT NOT NULL, "name" TEXT NOT NULL, "category" TEXT NOT NULL, "description" TEXT NOT NULL,
  "icon" TEXT, "sortOrder" INTEGER NOT NULL DEFAULT 0, CONSTRAINT "Technology_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "Experience" (
  "id" TEXT NOT NULL, "company" TEXT NOT NULL, "position" TEXT NOT NULL, "location" TEXT NOT NULL,
  "duration" TEXT NOT NULL, "description" TEXT NOT NULL, "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);
