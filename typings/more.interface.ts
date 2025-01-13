import { IHomeResItem } from "@/typings/home.interface";

export interface INetMoreReq {
  name: string;
  pageNum?: number;
  pageSize?: number;
}

export interface INetMoreResult {
  data: IHomeResItem;
  currentPage: number;
  pages: number;
}

export interface INetABTestRes {
  styleType: number;
  name: string;
  status: number;
}
