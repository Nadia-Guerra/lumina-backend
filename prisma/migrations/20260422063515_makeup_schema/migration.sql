-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "makeup_products" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "external_id" INTEGER NOT NULL,
    "name" VARCHAR(100),
    "img_url" VARCHAR(255),

    CONSTRAINT "makeup_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "makeup_styles" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(50) NOT NULL,
    "description" TEXT,
    "style_img" VARCHAR(255),

    CONSTRAINT "makeup_styles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "style_rules" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "style_id" UUID NOT NULL,
    "product_type" VARCHAR(50),
    "tag_requirement" VARCHAR(50),
    "color_family" VARCHAR(50),

    CONSTRAINT "style_rules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "makeup_examples" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "style_id" UUID NOT NULL,
    "title" VARCHAR(100),
    "image_url" VARCHAR(255),
    "tutorial_tips" TEXT,

    CONSTRAINT "makeup_examples_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "rating" INTEGER,
    "content" TEXT,
    "user_id" UUID NOT NULL,
    "makeup_product_id" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favorites" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "user_id" UUID NOT NULL,
    "makeup_product_id" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "favorites_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "makeup_products_external_id_key" ON "makeup_products"("external_id");

-- CreateIndex
CREATE UNIQUE INDEX "favorites_user_id_makeup_product_id_key" ON "favorites"("user_id", "makeup_product_id");

-- AddForeignKey
ALTER TABLE "style_rules" ADD CONSTRAINT "style_rules_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "makeup_styles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "makeup_examples" ADD CONSTRAINT "makeup_examples_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "makeup_styles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_makeup_product_id_fkey" FOREIGN KEY ("makeup_product_id") REFERENCES "makeup_products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_makeup_product_id_fkey" FOREIGN KEY ("makeup_product_id") REFERENCES "makeup_products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE users ADD COLUMN firebase_uid VARCHAR(128) UNIQUE;