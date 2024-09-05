import { EntityModel } from "anttojo-models";

export interface SaucerModel extends EntityModel {
    name: string;
    description: string;
    price: number;
    iva: boolean;
    image: string;
    type: string;
    categoria: string;
    /*tags: string[];*/
}
  