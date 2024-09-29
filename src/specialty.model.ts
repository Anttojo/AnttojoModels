import { EntityModel } from './entity.model';

export interface SpecialtyModel extends EntityModel {
  description?: string;
  image?: string;
}
