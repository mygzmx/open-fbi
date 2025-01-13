import { ELanguage, IBookItem,IArticleItem } from "@/typings/home.interface";

export interface INetBrowseReq {
  pageNo: number;
  typeTwoId?: number | null,
  pageSize?: number;
}

export interface IBrowseTypes {
  id: number;
  name: string;
  replaceName: string; // 去除特殊字符
  checked: boolean;
}

export interface INetBrowseRes {
  types: IBrowseTypes[];
  bookList: IBookItem[];
  currentPage: number;
  total: number;
  pages: number;
}

export interface INetBrowseTypeRes {
  id: number; // 类目id (包含全部：id = 0 为全部)
  name: string; // 类目名称 (包含全部：name = all 为全部) all | Fantasy ....
  replaceName: string; // 去除特殊字符
  simpleLanguage: ELanguage; // 语言分类
  total: number; // 该语言类目下，书籍的总数
}

export interface INetResourcesListRes {
  totalPage: number; // 剧评总页数
  totalNum:number; //剧评总条数
  pageNo: number; // 当前页
  limit: number; // 每页条数
  data: IArticleItem[];
}

export interface INetArticleRes{
  articleInfo:IArticleItem;
  recommendArticleList:IArticleItem[];
  recommendDramaList:IBookItem[];
  sourceBookId:string | number;
}

export interface InMaterialItem {
  materialId: number;
  materialName: string;
  materialCtime: string;
  shortPlayId: string;
  shortPlayName: string;
  shortPlayType: string;
  materialStatus: number;
  releaseTime: string;
  keyword: string;
  keywordText: string[];
  description: string;
  materialContent: string;
  viewNumber: number;
  materialCoverUrl: string;
  encodeMaterialUrl: string;
  tagV3: TagV3;
}
export interface INetMaterialRes extends InMaterialItem{
  materialRelatedVoList: MaterialRelatedVoList[];
  bookDetailResponse: BookDetailResponse; 
  sourceBookId: string | number;
}

export interface BookDetailResponse {
  book: IBook;
  recommends: IBook[];
  packNum: number;
  languages: string[];
  chapter: Chapter; 
}

export interface Chapter {
  id: string;
  name: string;
  unlock: boolean;
  new: boolean; 
}

export interface IBook {
  bookId: string;
  bookName: string;
  cover: string;
  ratings: number;
  introduction: string;
  labels: string[];
  tags: string[];
  followCount: number;
  chapterCount: number;
  typeOneIds: number[];
  typeTwoIds: number[];
  typeOneNames: string[];
  typeTwoNames: string[];
  typeTwoList: TypeTwoList[];
  status: string;
  language: string;
  replacedBookId?: string;
  free: number;
  author: string;
  replacedBookName: string;
  typeOneName: string;
  typeTwoName: string;
  simpleLanguage: string;
  bookNameEn?: string;
  read: boolean;
  inLibrary: boolean;
  viewCountDisplay: string;
  lastUpdateTimeDisplay: string; 
}

export interface TypeTwoList {
  id: number;
  name: string; 
}

export interface MaterialRelatedVoList {
  materialId: number;
  materialName: string;
  materialCtime: string;
  shortPlayId: string;
  shortPlayName: string;
  shortPlayType: string;
  materialStatus: number;
  releaseTime: string;
  keyword: string;
  description: string;
  materialContent: string;
  text1: string;
  text2: string;
  text3: string;
  viewNumber: number;
  materialCoverUrl: string;
  tagV3: TagV3; 
  keywordEn: string;
}
export interface TagV3{
  [key: string]: string
}