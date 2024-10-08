import { AppRolModel } from './app-rol.model';
import { StoreModel } from './store.model';
import { UserModel } from './user.model';

export interface RolUserStoreModel {
  store: StoreModel;
  user: UserModel;
  rol: AppRolModel;
}
