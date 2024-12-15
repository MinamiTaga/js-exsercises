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
        <Link href="/Timer">タイマー</Link>
        <Link href="/StopWatch">ストップウォッチ</Link>
      </main>
    </div>
  );
}
