/**
 * 5104 章节列表接口下行参数
 */
export interface INetKeyRes {
  words: ISeoKeyWords[];
  totalSize: number;
  source?: string;
}

export interface ISeoKeyWords {
  id: number;
  name: string;
}
