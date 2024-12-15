"use client"; // This is a client component 👈🏽
import { useEffect, useState } from "react";
import styles from "../app/page.module.css";

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const now = today.toTimeString().split(" ")[0];
    // 1秒ごとに時間を取得して更新
    const timeoutId = setTimeout(() => {
      setTime(now);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [time]);

  return (
    <>
      <div className={styles.clock}>{time.toString()}</div>
    </>
  );
};

export default Clock;
