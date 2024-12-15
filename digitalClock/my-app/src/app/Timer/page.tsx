import styles from "../page.module.css";
import Timer from "../../components/Timer";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Timer />
        <Link href="/">もどる</Link>
      </main>
    </div>
  );
}
