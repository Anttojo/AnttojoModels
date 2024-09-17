import { EntityModel } from "./entity.model";
import { CategoryModel } from "./category.model";

export interface GroupModel extends EntityModel {
  name?: string;
  description?: string;
  order?: number;
  categories?: CategoryModel[];
}
