import styles from "../page.module.css";
import Link from "next/link";
import StopWatch from "@/components/StopWatch";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <StopWatch />
        <Link href="/">もどる</Link>
      </main>
    </div>
  );
}
