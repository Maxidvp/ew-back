export interface IPlant {
  title: string;
  info: PlantsInfo;
  imgs: string;
  location: PlantsLocation;
}

export type PlantsInfo = {
  other_names: string;
  habit: string;
  height: number;
  growth: string;
  foliage: string;
  attractive: string;
  irrigation: string;
};

export type PlantsLocation = {
  province: string;
  //region: string;
};