import { EntityModel } from "./entity.model";
import { ImageModel } from "./image.model";

export enum Red {
  X = 'X',
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  TIKTOK = 'tiktok',

}

export interface SocialNetModel extends EntityModel {
  description: string;
  red: Red;
  qr?: ImageModel;
}
