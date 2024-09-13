import { EntityModel } from "./entity.model";

export enum TypeRfc {
  FISICAL = "fisica",
  MORAL = "moral",
}

export interface TaxDataModel extends EntityModel {
  rfc: string;
  type: TypeRfc;
  representative: string;
  socialReason: string;
  address: string;
  country: string;
  state: string;
  city: string;
  cp: string;
  lat: string;
  long: string;
  rfcFile?: string;
  addressFile?: string;
  idFile?: string;
  impiFile?: string;
}
