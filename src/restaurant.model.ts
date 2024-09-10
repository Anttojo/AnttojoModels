import {  ProductModel } from "./product.model";
import { HoraryModel } from "./horary.model";
import { EntityModel } from "./entity.model";
import { LocationModel } from "./location.model";
import { ServiceModel } from "./service.model";
import { CategoryModel } from "./category.model";
import { SpecialtyModel } from "./specialty.model";
import { MealTimesModel } from "./mealTimes.model";
import { PaymentMethodsModel } from "./paymentMethods.model";
import { MenuModel } from "./menu.model";
import { ImageModel } from "./image.model";
import { SocialModel } from "./social.model";

export interface RestaurantModel extends EntityModel { 
  name?: string;
  description?: string;
  email?: string;
  branch?: string;
  social?: SocialModel[];
  phone?: string;
  logo?: string;
  cover?: string;
  images?: ImageModel[];
  menu?: MenuModel[];
  location?: LocationModel;
  service?: ServiceModel[];
  category?: CategoryModel[];
  specialty?: SpecialtyModel[];
  horario?: HoraryModel[];
  mealtimes?: MealTimesModel[];
  chef?: string;
  paymentMethods?: PaymentMethodsModel[];
  outfit?: string[];
}
