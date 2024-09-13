import { EntityModel } from "./entity.model";
import { FileModel } from "./file.model";

export enum TypeRfc {
  FISICAL = "fisica",
  MORAL = "moral",
}

export interface taxDataModel extends EntityModel {
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
  rfcFile?: FileModel;
  addressFile?: FileModel;
  idFile?: FileModel;
  impiFile?: FileModel;
}
