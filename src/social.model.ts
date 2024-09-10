import { EntityModel } from "./entity.model";
import { ImageModel } from "./image.model";

export enum Red {
  TEWITTER = 'X',
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  TIKTOK = 'tiktok',

}

export interface SocialModel extends EntityModel {
  description: string;
  red: Red;
  qr?: ImageModel;
}
