"use client"; // This is a client component 👈🏽
import { useEffect, useState } from "react";
import styles from "../app/page.module.css";

const Dates: React.FC = () => {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const updateDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      const week = ["日", "月", "火", "水", "木", "金", "土"][today.getDay()];
      setDate(`${year}年${month}月${day}日（${week}）`);
    };

    updateDate(); // 初回の日付更新

    const now = new Date();
    // 次の日までの時間計算
    const timeUntilMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() -
      now.getTime();

    // 次の日付が始まるタイミングで更新
    const timeoutId = setTimeout(() => {
      updateDate();
      setInterval(updateDate, 24 * 60 * 60 * 1000); // その後は毎日更新
    }, timeUntilMidnight);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <div className={styles.date}>{date}</div>;
};

export default Dates;
