import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.scss";


export default function Home() {
  return (
    <main className={styles.homeWrap}>
      <Link href={'/tools/image/png'}>/tools/image/png</Link>
    </main>
  );
}
