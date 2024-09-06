import { EntityModel } from "anttojo-models";

export interface DinnerModel extends EntityModel {
    name: string;
    description: string;
    price: number;
    iva: boolean;
    image: string;
    type: string;
    categoria: string;
    /*tags: string[];*/
}
  