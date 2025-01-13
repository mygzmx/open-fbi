import Link from "next/link";
import styles from "@/app/page.module.scss";
import { NextPage } from "next";

const Verse: NextPage = () => {
  return (
    <main className={styles.homeWrap}>
      <Link href={'/'}>诗歌</Link>
    </main>
  );
}

export default Verse;
