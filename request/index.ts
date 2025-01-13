import { ELanguage, IHomeResItem } from "@/types/home.interfaces";
import { geFetch, poFetch } from "@/request/fetch";

type ServerResultType<R> = Promise<R | 'BadRequest'>

export const netHome = (language?: ELanguage): ServerResultType<IHomeResItem[]> => {
  return poFetch('/webfic/home/index', undefined, language || ELanguage.English)
}
