export enum EHomeStyle {
  small = 'SMALL_CARD_LIST',
  big = 'BIG_CARD_COMBINATION',
}

export interface IHomeResItem {
  id: number;
  name: EHomeName;
  style: EHomeStyle;
  items: IBookItem[];
  more: boolean;
  subName: string;
}

export interface IBookItem {
  bookId: string;
  bookName: string;
  cover: string;
  viewCount: number;
  followCount?: number;
  introduction: string;
  chapterCount: number;
  tags: string[];
  typeTwoNames: string[];
  typeTwoName: string;
  typeTwoIds: string[];
  language: string;
  simpleLanguage?: ELanguage;
  typeTwoList?: { id: number; name: string; }[]
  name: string;
  actionType: string;
  action: string;
  ratings: number;
  author: string;
  lastUpdateTime: string;
  viewCountDisplay: string;
  lastUpdateTimeDisplay: string;
  replacedBookName: string;
  firstChapterId?: string;
  columnName: string;
  bookNameEn?: string; // 英文名称替换字段
}
export interface IArticleItem {
  articleAbstract:string;	//文章摘要	string
  articleContent:string;	//文章内容	string
  articleCoverPic?:string;	//剧封面图	string
  articleName?:string;	//文章标题	string
  articleTitle:string;	//文章标题	string
  articleTitleEn:string;	//格式化文章标题	string
  articleUrl:string;	//文章缩略图	string
  author:string;	//文章作者	string
  bookId:string;	//短剧ID	string
  bookName:string;	//短剧名称	string
  ctime:string;	//string(date-time)
  id:number;	//剧评ID	integer(int64)
  keywords:string;	//关键字	string
  property:string;	//属性	string
  publishTime:string;	//发布时间	string(date-time)
  status:number;	//状态	integer(int32)
  tag:string;	//分类	string
  tagId:number;	//分类Id	integer(int64)
  utime:string;	//
  clickNum:number;	//点击数	integer(int32)
}
export interface IClassifiedItem{
  tag: string;
  articleList:IArticleItem[];
  linkTag?: string; // 自定义，默认取articleList第一条的tag参数
}
export interface IChapterList {
  id: string;
  index: number;
  mp4: string;
  name: string;
  unlock: boolean;
  cover: string;
  new: boolean;
  utime: string;
  showEposide?: boolean;
  newInd?: number;
  mp415s?: string;
}


export enum ELanguage {
  English = 'en',
  Spanish = 'es',
  ZhHans = 'zhHans', // 简体中文
  Zh = 'zh', // 繁體中文
  Korean = 'ko', // 韩语
  IN = 'in', // 印尼
  JAP = 'ja', // 日语
  DE = 'de', // 德语
  TH = 'th', // 泰语
  TL = 'tl', // 菲律宾语
  PT = 'pt', // 葡语
  FR = 'fr', // 法语
  AR = 'ar', // 阿拉伯语
}

export const LanguageActions: { text: string; key: ELanguage; label: string; }[] = [
  { text: 'English', key: ELanguage.English, label: "EN" },
  { text: '简体中文', key: ELanguage.ZhHans, label: "CN" },
  { text: '繁體中文', key: ELanguage.Zh, label: "TC" },
  { text: 'Español', key: ELanguage.Spanish, label: "ESP" },
  { text: '한국인', key: ELanguage.Korean, label: "KO" },
  { text: 'Bahasa Indonesia', key: ELanguage.IN, label: "IN" },
  { text: '日本語', key: ELanguage.JAP, label: "JAP" },
  { text: 'Deutsch', key: ELanguage.DE, label: "DE" },
  { text: 'Français', key: ELanguage.FR, label: "FR" },
  { text: 'Português', key: ELanguage.PT, label: "PT" },
  { text: 'الصينية المبسطة', key: ELanguage.AR, label: "AR" },
  { text: 'ภาษาจีนตัวย่อ', key: ELanguage.TH, label: "TH" },
  { text: 'Filipino', key: ELanguage.TL, label: "TL" },
]

export enum EHomeName {
  TopHits = '热门好剧',
  MustSees = '必看好剧',
  Trending = '当前热播',
  HiddenGems = '精彩剧集',
  // MightLike = '为你推荐',
}

export const ColumnNameRoute = {
  [EHomeName.TopHits]: 'top-hits',
  [EHomeName.MustSees]: 'must-sees',
  [EHomeName.Trending]: 'trending',
  [EHomeName.HiddenGems]: 'hidden-gems',
  // [EHomeName.MightLike]: 'might-like',
}

export const ColumnNameRouteReversion = {
  'top-hits': EHomeName.TopHits,
  'must-sees': EHomeName.MustSees,
  'trending': EHomeName.Trending,
  'hidden-gems': EHomeName.HiddenGems,
  // 'might-like': EHomeName.MightLike,
}

export enum EnumPosition {
  banner = 'banner',
  popular = 'Popular',
  trending = 'Trending',
  ranking = 'Ranking',
  'new-releases' = 'New Releases',
  romance = 'Romance',
  completed = 'Completed',
  'editors-picks' = "Editors' Picks",
  customInset = "inset"
}
