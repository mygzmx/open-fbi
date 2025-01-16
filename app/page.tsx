import { NextPage } from "next";
import { netHome } from "@/request";
import { EHomeStyle, ELanguage } from "@/types/home.interfaces";
import WapHome from "@/components/home";
import { notFound } from "next/navigation";

export const revalidate = 3600; // s

const Home: NextPage = async () => {
  const homeData = await netHome(ELanguage.English)
  if (homeData === 'BadRequest' || !homeData) {
    notFound()
  }
  const bigList = (homeData.find(item => item.style === EHomeStyle.big)?.items || []).slice(0, 3);
  const smallData = homeData.filter(item => item.style === EHomeStyle.small);

  return <WapHome bigList={bigList} smallData={smallData}/>;
}

export default Home;
