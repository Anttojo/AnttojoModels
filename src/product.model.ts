import { CategoryModel } from "./category.model";
import { EntityModel } from "./entity.model";
import { ImageModel } from "./image.model";
import { SubCategoryModel } from "./subcategory.model";
import { TypeProductModel } from "./type-product";

export interface ProductModel extends EntityModel {
    name: string;
    description: string;
    price: number;
    images: ImageModel[];
    type: TypeProductModel;
    categories: CategoryModel[];
    subcategories: SubCategoryModel[];

    /*tags: string[];*/
}
  