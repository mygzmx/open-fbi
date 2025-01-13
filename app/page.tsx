import Link from "next/link";
import styles from "@/app/page.module.scss";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className={styles.homeWrap}>
      <Link style={{ fontSize: '0.5rem' }} href={'/tools/image/png'}>/tools/image/png</Link>
      <br/>
      <Link href={'/verse'}>verse</Link>
    </main>
  );
}

export default Home;
