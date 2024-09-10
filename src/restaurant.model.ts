import {  ProductModel } from "./product.model";
import { HoraryModel } from "./horary.model";
import { EntityModel } from "./entity.model";
import { LocationModel } from "./location.model";
import { ServiceModel } from "./service.model";
import { CategoryModel } from "./category.model";
import { SpecialtyModel } from "./specialty.model";
import { MealTimesModel } from "./meal-times.model";
import { PaymentMethodsModel } from "./payment-methods.model";
import { MenuModel } from "./menu.model";
import { ImageModel } from "./image.model";
import { SocialNetModel } from "./social-net.model";

export interface RestaurantModel extends EntityModel { 
  name?: string;
  description?: string;
  email?: string;
  branch?: string;
  socialsNet?: SocialNetModel[];
  phone?: string;
  logo?: string;
  cover?: string;
  images?: ImageModel[];
  menu?: MenuModel[];
  location?: LocationModel;
  services?: ServiceModel[];
  categories?: CategoryModel[];
  specialities?: SpecialtyModel[];
  mealtimes?: MealTimesModel[];
  chef?: string;
  paymentMethods?: PaymentMethodsModel[];
  dresscode?: string[];
}
