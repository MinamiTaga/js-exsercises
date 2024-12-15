"use client"; // This is a client component 👈🏽
import { useRef, useState } from "react";
import styles from "../app/page.module.css";
import Button from "./Button";

const StopWatch: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  function handleStart() {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  }

  function handlePause() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  }

  function handleReset() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  }

  const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
  const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
  const minutes = `0${Math.floor(time / 60000) % 60}`.slice(-2);
  const hours = `0${Math.floor(time / 3600000)}`.slice(-2);

  return (
    <div>
      <h1>ストップウォッチ</h1>
      <div className={styles.clock}>
        {hours}:{minutes}:{seconds}:{milliseconds}
      </div>
      {isRunning ? (
        <Button onClick={handlePause} text="一時停止" disabled={!isRunning} />
      ) : (
        <Button onClick={handleStart} text="開始" disabled={isRunning} />
      )}
      <Button onClick={handleReset} text="リセット" disabled={false} />
    </div>
  );
};

export default StopWatch;
