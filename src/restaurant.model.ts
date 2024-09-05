import {  SaucerModel } from "./saucer.model";
import { HoraryModel } from "./horary.model";
import { EntityModel } from "anttojo-models";
import { LocationModel } from "./location.model";
import { ServiceModel } from "./service.model";
import { CategoryModel } from "./category.model";
import { SpecialtyModel } from "./specialty.model";
import { ExtrasModel } from "./extras.model";
import { PaymentMethodsModel } from "./paymentMethods.model";

export interface RestaurantModel extends EntityModel { 
  name?: string;
  description?: string;
  email?: string;
  branch?: string;
  facebook?: string;
  instagram?: string;
  x?: string;
  tiktok?: string;
  phone?: string;
  logo?: string;
  cover?: string;
  images?: string[];
  menu?: SaucerModel[];
  address?: string;
  country?: string;
  state?: string;
  city?: string;
  cp?: string;
  location?: LocationModel;
  service?: ServiceModel[];
  category?: CategoryModel[];
  specialty?: SpecialtyModel[];
  horario?: HoraryModel[];
  extras?: ExtrasModel[];
  chef?: string;
  paymentMethods?: PaymentMethodsModel[];
  //vestimenta?: string[];
}
