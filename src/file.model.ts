import { EntityModel } from "./entity.model";

export interface FileModel extends EntityModel {
  name: string;
  path: string;
  type?: string;
  size?: number;
}
