import { EntityModel } from "./entity.model";

export interface SubCategoryModel extends EntityModel{
    nombre?:string;
    description?: string;
    order?: number;
}