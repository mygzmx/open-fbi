import { ELanguage, IBookItem, IChapterList, EnumPosition,IArticleItem,IClassifiedItem } from "@/typings/home.interface";
import { ESearchType } from "./sitemap.interface";


export interface INetBookRes extends IBookItem{
  book: IBookItem;
  recommends: IBookItem[];
  chapterList: IChapterList[];
  chapter: {
    id: string;
    name: string;
  };
  // column: {
  //   bookId: string;
  //   bookName: string;
  //   columnName: string;
  // };
  languages: ELanguage[];
  articleList:IArticleItem;
  sourceBookId: string;
}

export interface INetLockReq {
  bookId: string;
  chapterId: string;
  indexNumber: number;
  language?: ELanguage;
}

export interface INetLockRes {
  mp415s?: string;
  new: boolean;
  unlock: boolean;
}
export interface IBook {
  bookId: string;
  bookName: string;
  chapterCount: number;
  commentCount: number;
  contractStatus: string;
  contractType: string;
  cover: string;
  defaultChapterId: number;
  editor: string;
  introduction: string;
  language: ELanguage;
  lastChapterId: number;
  lastChapterName: string;
  lastChapterTime: string;
  lastUpdateTimeDisplay: string;
  ratings: number;
  totalWords: number;
  viewCountDisplay: string;
  writeStatus: string;
  author: string;
  replacedBookName: string;
  firstChapterId?: string;
  columnName: EnumPosition;
  typeTwoNames: string[];
  typeTwoIds: number[];
  typeTwoName: string;
  labels: string[];
  bookNameEn?: string;
}

export interface INetKeywordsReq {
  searchType: ESearchType;
  pageNum: number;
  pageSize?: number;
}

export interface IKeywordItem {
  id: string | number;
  name: string;
  utime: string;
}

export interface INetKeywordsRes {
  data: IKeywordItem[];
  currentPage: number;
  total: number;
  pages: number;
}

export interface INetKeywordTagReq {
  id: string;
  pageNum: number;
  pageSize?: number;
}

export interface INetKeywordTagRes {
  books: ITagBookItem[];
  currentPage: number;
  pages: number;
  total: number;
  relationKeywords: IKeywordItem[];
  keyword: string;
  keyStatus: 0 | 1;
}

export interface typeTwoListItem {
  id: string;
  name: string;
}

export interface ITagBookItem extends IBook {
  bookId: string;
  bookName: string;
  copyrighted: boolean;
  cover: string;
  introduction: string;
  recommend: boolean;
  tag: string;
  simpleLanguage: ELanguage;
  isHot: ETagBookItemIsHot;
  typeTwoList: typeTwoListItem[];
}

export enum ETagBookItemIsHot {
  yes = 1,
  no = 0
}
// resources
export interface INetResourcesListReq{
  pageNo: number;
  pageSize?: number;
  tag:string;
}

export interface INetResourcesRes {
  bannerList:IArticleItem[];
  classifiedList:IClassifiedItem[];
}
