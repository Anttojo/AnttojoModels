import { CategoryModel } from "./category.model";
import { EntityModel } from "./entity.model";
import { ProductModel } from "./product.model";

export interface SubCategoryModel extends EntityModel{
    nombre?:string;
    description?: string;
    order?: number;
    products: ProductModel[];
    categories?: CategoryModel[];
}