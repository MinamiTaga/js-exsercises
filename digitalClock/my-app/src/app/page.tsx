import styles from "./page.module.css";
import Clock from "../components/Clock";
import Dates from "../components/Date";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Dates />
        <Clock />
        <div className={styles.links}>
          <Link href="/Timer" className={styles.link}>
            タイマー
          </Link>
          <Link href="/StopWatch" className={styles.link}>
            ストップウォッチ
          </Link>
        </div>
      </main>
    </div>
  );
}
