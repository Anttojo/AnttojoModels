import { EntityModel } from "./entity.model";
import { CategoryModel } from "./category.model";
import { ProductModel } from "./product.model";

export interface MenuModel extends EntityModel{
    name?: string;
    description?: string;
    order?: number;
    categories?: CategoryModel[];    
}