import { EntityModel } from "anttojo-models";

export interface ServiceModel extends EntityModel{
    url?: string;
    descripcion?: string;
}