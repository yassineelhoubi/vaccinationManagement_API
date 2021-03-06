import { Document } from "mongoose";

export interface IUser extends Document {
  cin: string;
  address: string;
  email: string;
  fName: string;
  lName: string;
  center: string;
  city: string;
  area: string;
  nbrPhone: number;
  shotTaken: number;
  diseaseOrTreatments?: string;
  sideEffects1stVaccine?: string;
  sideEffects2stVaccine?: string;
}
export interface IManager extends Document {
  fName: string;
  lName: string;
  area: string;
  email: string;
  hashed_password: string;
  salt: string;
  authenticate: Function;
  createdAt:Date
  updatedAt:Date

}
export interface IAdmin extends Document {
  userName: string;
  email: string;
  hashed_password: string;
  salt: string;
  authenticate: Function
}
export interface ICenter extends Document {
  name: string;
  city: string;
  area: string;
  createdBy: Object;
}
