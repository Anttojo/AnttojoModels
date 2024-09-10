import { EntityModel } from "./entity.model";
import { SubCategoryModel } from "./subcategory.model";

export interface CategoryModel extends EntityModel{
    name?: string;
    description?: string;
    order?: number;
    subcategory?: SubCategoryModel[];
}