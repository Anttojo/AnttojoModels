import { EntityModel } from "./entity.model";

export interface LocationModel extends EntityModel{
    address?: string;
    country?: string;
    state?: string;
    city ?: string;
    cp?: string;
    lat?: string;
    long?: string;
}