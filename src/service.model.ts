import { EntityModel } from "./entity.model";

export interface ServiceModel extends EntityModel{
    url?: string;
    description?: string;
}