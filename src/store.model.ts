import { DressCodeModel } from "./dress-code.model";
import { EntityModel } from "./entity.model";
import { ImageModel } from "./image.model";
import { MealTimesModel } from "./meal-times.model";
import { PaymentMethodsModel } from "./payment-methods.model";
import { ServiceModel } from "./service.model";
import { SpecialtyModel } from "./specialty.model";

export interface StoreModel extends EntityModel {
  name: string;
  slogan?: string;
  logo: ImageModel;
  description?: string;
  email?: string;
  branch: string;
  phone?: string;
  cover: ImageModel;
  images?: ImageModel[];
  address: string;
  country: string;
  state: string;
  city: string;
  cp: string;
  lat: string;
  long: string;
  services?: ServiceModel[];
  specialities?: SpecialtyModel[];
  mealtimes?: MealTimesModel[];
  paymentMethods?: PaymentMethodsModel[];
  dresscode?: DressCodeModel[];
}
