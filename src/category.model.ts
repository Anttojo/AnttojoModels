import { EntityModel } from "./entity.model";
import { MenuModel } from "./menu.model";
import { ProductModel } from "./product.model";
import { SubCategoryModel } from "./subcategory.model";

export interface CategoryModel extends EntityModel{
    name?: string;
    description?: string;
    order?: number;
    subcategorires?: SubCategoryModel[];
    products: ProductModel[];
    menus?: MenuModel[];
}