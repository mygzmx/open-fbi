export interface INetSearchRes {
  pageNo: number;
  limit: number;
  totalNum: number;
  totalPage: number;
  data: ILocalSearchRes[];
}
export interface ILocalSearchRes {
  bookId: string;
  bookName: string;
  coverCutWap: string;
  bookNameEn: string;
  replacedBookName?: string;
  totalChapterNum: number;
  introduction: string;
  bookTypeTwo:{
    [key:string]: string
  };
  [key:string]: any;
}
