import { IRegion } from "./IRegion";

export interface IContinent{
  id?: string;
  name: string;
  description: string;
  regions?: IRegion[]
}