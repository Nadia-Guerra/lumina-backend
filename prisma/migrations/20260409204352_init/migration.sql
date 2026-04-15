-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MakeupProduct" (
    "id" TEXT NOT NULL,
    "external_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "img_url" TEXT,
    "product_type_id" TEXT,

    CONSTRAINT "MakeupProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductColor" (
    "id" TEXT NOT NULL,
    "color_name" TEXT NOT NULL,
    "hex_code" TEXT,
    "makeup_product_id" TEXT NOT NULL,

    CONSTRAINT "ProductColor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ProductType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "makeup_product_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "content" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "makeup_product_id" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MakeupStyle" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "style_img" TEXT,

    CONSTRAINT "MakeupStyle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MakeupExample" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "example_img" TEXT,
    "style_id" TEXT NOT NULL,

    CONSTRAINT "MakeupExample_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StyleRequiredProductType" (
    "style_id" TEXT NOT NULL,
    "product_type_id" TEXT NOT NULL,

    CONSTRAINT "StyleRequiredProductType_pkey" PRIMARY KEY ("style_id","product_type_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MakeupProduct_external_id_key" ON "MakeupProduct"("external_id");

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_user_id_makeup_product_id_key" ON "Favorite"("user_id", "makeup_product_id");

-- AddForeignKey
ALTER TABLE "MakeupProduct" ADD CONSTRAINT "MakeupProduct_product_type_id_fkey" FOREIGN KEY ("product_type_id") REFERENCES "ProductType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductColor" ADD CONSTRAINT "ProductColor_makeup_product_id_fkey" FOREIGN KEY ("makeup_product_id") REFERENCES "MakeupProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_makeup_product_id_fkey" FOREIGN KEY ("makeup_product_id") REFERENCES "MakeupProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_makeup_product_id_fkey" FOREIGN KEY ("makeup_product_id") REFERENCES "MakeupProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MakeupExample" ADD CONSTRAINT "MakeupExample_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "MakeupStyle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StyleRequiredProductType" ADD CONSTRAINT "StyleRequiredProductType_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "MakeupStyle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StyleRequiredProductType" ADD CONSTRAINT "StyleRequiredProductType_product_type_id_fkey" FOREIGN KEY ("product_type_id") REFERENCES "ProductType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
