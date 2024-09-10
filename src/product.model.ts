import { CategoryModel } from "./category.model";
import { EntityModel } from "./entity.model";
import { ImageModel } from "./image.model";
import { SubCategoryModel } from "./subcategory.model";

export interface ProductModel extends EntityModel {
    name: string;
    description: string;
    price: number;
    iva: boolean;
    image: ImageModel;
    type: string;
    category: CategoryModel[];
    subcategory: SubCategoryModel[];

    /*tags: string[];*/
}
  