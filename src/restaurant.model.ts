import {  SaucerModel } from "./saucer.model";
import { HoraryModel } from "./horary.model";
import { EntityModel } from "anttojo-models";

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
  // images?: string[];
  menu?: SaucerModel[];
  address?: string;
  country?: string;
  state?: string;
  city?: string;
  cp?: string;
  location?: { lat?: number; lng?: number };
  //servicios?: string[];
  //categorias?: string[];
  //especialidad?: string[];
  horario?: HoraryModel[];
  //extras?: string[];
  chef?: string;
  //formasDePago?: string[];
  //vestimenta?: string[];
}
