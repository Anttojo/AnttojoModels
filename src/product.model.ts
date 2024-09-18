import { CategoryModel } from './category.model';
import { EntityModel } from './entity.model';
import { SubCategoryModel } from './subcategory.model';
import { TypeProductModel } from './type-product.model';

export interface ProductModel extends EntityModel {
  name: string;
  description: string;
  price: number;
  images?: string[];
  typesProduct: TypeProductModel[];
  categories: CategoryModel[];
  subcategories: SubCategoryModel[];

  /*tags: string[];*/
}
