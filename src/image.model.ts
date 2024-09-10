import { EntityModel } from "./entity.model";

export interface ImageModel extends EntityModel{
    url?: string;
    description?: string;
}
  