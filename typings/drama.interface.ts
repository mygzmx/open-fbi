import { IBookInfo, IBookTypeVo } from "@/typings/home.interface";
/**
 * 详情页及播放页上行参数
 */
export interface INetDramaReq {
  bookId: string;
  chapterId?: string;
  type: number; // 1-详情页 2-播放页
}

/**
 * 剧集下行参数
 */
export interface INetDramaRes {
  bookInfoVo: IBookInfo;
  chapterList: IChapterVo[]; // 下发
  bookInfoVoList: IBookInfo[]; // 相关剧集
  performerVo?: IPerformerVo; // 主演信息
  chapterVo?: IChapterVo; // 章节ID不为空时，且type为播放页时  下发
  sex: ESex; // 当前是否为男频; true的时候男主的剧展示在上面，false女主
  typeThreeList?: IBookTypeVo[];//标签分类的所有name以及id
}

export enum ESex {
  Man = 1,
  Female = 2
}

export interface IChapterVo {
  chapterId: string;
  chapterName: string;
  isCharge: EIsCharge;
  chapterIndex: number; // 章节号
  videoStarsNum?: number; // 收藏数
  likeNum?: number; // 点赞数
  chapterVideoVo?: IChapterVideoVo; // 短剧播放地址实体类
  cover: string;
}

export interface IChapterVideoVo {
  mp4: string;
  m3u8: string;
  mp4720p: string;
  m3u8720p: string;
}

export interface IPerformerVo {
  actor?: string; // 男演员
  actorPhoto?: string; // 男演员照片地址
  actorVideoNum?: string; // 主演8部剧
  actorList?: IBookInfo[]; // 男演员演出的剧
  actress?: string;
  actressPhoto?: string;
  actressVideoNum?: string;
  actressList?: IBookInfo[];
}

export enum EIsCharge {
  Free = '0',
  Pay  = '1',
}

export enum EBookStatus {
  Update = 0,
  End = 1,
}
