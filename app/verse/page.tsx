import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.scss";
import { NextPage } from "next";

const Verse: NextPage = () => {
  return (
    <main className={styles.homeWrap}>
      <Link href={'/'}>Home</Link>
    </main>
  );
}

export default Verse;
