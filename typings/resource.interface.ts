import { IArticleItem } from "@/typings/home.interface";

export interface INetResourcesTypeRes {
  count: number;
  tag: string;
  tagId: number;
}

export interface INetAllResources {
  data: IArticleItem[];
  limit: number;
  pageNo: number;
  totalNum: number;
  totalPage: number;
}
export interface INetAllMaterial {
  data: materialItem[];
  limit: number;
  pageNo: number;
  totalNum: number;
  totalPage: number;
}
export interface materialItem {
  materialId: number;
  materialName: string;
  materialNameEn: string;
  materialCtime: string;
  shortPlayId: string;
  shortPlayName: string;
  utime: string;
  materialUrl: string;
  description: string;
  coverUrl: string;
  materialDuration: number;
  keywordEn: string;
}
