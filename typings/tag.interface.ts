import { ISeoKeyWords } from "@/typings/keywords.interface";
import { IBookInfo, IBookTypeVo } from "@/typings/home.interface";
/**
 * 5101 搜索上行
 */
export interface INetTagReq {
  sourceType?: ESourceType;
  tagId?: number;
  index?: number;
  keyword?: string;
}

export enum ESourceType {
  搜索页 = 1,
  聚合页 = 2
}

/**
 * 5101 搜索下行
 */
export interface INetTagRes {
  bookList: IBookInfo[];
  totalSize: number;
  isMore: 1 | 0; // 是否还有下一页
  tagName?: string;
  words?: ISeoKeyWords[]; // 有文字重合的关键词
  recommendBook?: IBookInfo[];
  tagStatus: 1 | 2; // 1 已放开 2 未放开
  source?: string;
  typeThreeList?: IBookTypeVo[];//标签分类的所有name以及id
}
