import { EntityModel } from "anttojo-models";

export interface LocationModel extends EntityModel{
    address?: string;
    country?: string;
    state?: string;
    city ?: string;
    cp?: string;
    lat?: string;
    long?: string;
}