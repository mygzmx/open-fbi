import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.scss";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className={styles.homeWrap}>
      <Link href={'/tools/image/png'}>/tools/image/png</Link>
    </main>
  );
}

export default Home;
