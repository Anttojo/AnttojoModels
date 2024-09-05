import { EntityModel } from "anttojo-models";

export interface LocationModel extends EntityModel{
    latitud?: string;
    longitud?: string;
    street?: string;
    outerNumber?: string;
    interiorNumber?: string;
}