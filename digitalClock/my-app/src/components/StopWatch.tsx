"use client"; // This is a client component 👈🏽
import { useRef, useState } from "react";
import styles from "../app/page.module.css";
import Button from "./Button";

const StopWatch: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const [laps, setLaps] = useState<number[]>([]);
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
  const handleLap = () => {
    setLaps((prev) => [time, ...prev]);
  };

  function handleReset() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  }

  const formatTime = (time: number): string => {
    const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
    const minutes = `0${Math.floor(time / 60000) % 60}`.slice(-2);
    const hours = `0${Math.floor(time / 3600000)}`.slice(-2);
    return `${Number(hours) > 0 ? `${hours}:` : ""}${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className={styles.stopwatchContainer}>
      <h1>ストップウォッチ</h1>
      <div className={styles.clock}>{formatTime(time)}</div>
      <div className="buttonContainer">
        {isRunning ? (
          <Button onClick={handlePause} text="停止" disabled={!isRunning} />
        ) : (
          <Button onClick={handleStart} text="開始" disabled={isRunning} />
        )}
        <Button onClick={handleLap} disabled={!isRunning} text="ラップ" />

        <Button onClick={handleReset} text="リセット" disabled={false} />
      </div>
      <div className={styles.lapContainer}>
        <ul className={styles.lapList}>
          {laps.map((lap, index) => (
            <li key={index} className={styles.lapItem}>
              {`ラップ ${laps.length - index}: ${formatTime(lap)}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StopWatch;
