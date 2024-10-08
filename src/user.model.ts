import { EntityModel } from './entity.model';
import { RolUserStoreModel } from './rol-user-store.model';

export enum Rol {
  ADMIN = 'admin',
  PUBLIC = 'public',
}
export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}
export interface LoginReq {
  email: string;
  password: string;
}

export interface LoginResp {
  accessToken: string;
  user: UserModel;
}

export interface CheckMailResp {
  exist: boolean;
}

export interface UserModel extends EntityModel {
  email: string;
  password?: string;
  name?: string;
  lastName?: string;
  phone?: string;
  gender?: Gender;
  roles: Rol[];
  birthdate?: Date;
  city?: string;
  state?: string;
  country?: string;
  image?: string;
  stores?: RolUserStoreModel[];
}
