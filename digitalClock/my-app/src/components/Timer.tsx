"use client"; // This is a client component 👈🏽
import { useEffect, useState } from "react";
import styles from "../app/page.module.css";
import InputField from "./InputField";
import Button from "./Button";
import SelectBox from "./SelectBox";

const Timer: React.FC = () => {
  const [minutes, setMinutes] = useState<string>("0");
  const [seconds, setSeconds] = useState<string>("0");
  const [sound, setSound] = useState<string>("/kirakira.mp3");
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const sounds = [
    { value: "kirakira", label: "キラキラ" },
    { value: "kansei", label: "歓声" },
    { value: "wolf", label: "オオカミ" },
    { value: "rappa", label: "突撃ラッパ" },
    { value: "santa", label: "サンタ" },
  ];
  // useSoundフックでサウンドをセットアップ
  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  useEffect(() => {
    let id: NodeJS.Timeout | null = null;
    if (isActive && totalSeconds > 0) {
      id = setInterval(() => {
        setTotalSeconds((seconds) => seconds - 1);
      }, 1000);
      setIntervalId(id);
    } else if (totalSeconds === 0 && isActive) {
      clearInterval(intervalId as NodeJS.Timeout);
      playSound(); // 効果音を再生する
      setIsActive(false);
    }
    return () => {
      if (id) clearInterval(id);
    };
  }, [isActive, totalSeconds]);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const handleStart = () => {
    const totalSec = parseInt(minutes) * 60 + parseInt(seconds);
    if (!isNaN(totalSec) && totalSec >= 0) {
      setTotalSeconds(totalSec);
      setIsActive(true);
      setErrorMessage(null);
    } else {
      setErrorMessage("Invalid time input!");
    }
  };

  const changeSound = (e: string) => {
    setSound(`/${e}.mp3`);
  };

  const handleReset = () => {
    setIsActive(false);
    setTotalSeconds(parseInt(minutes) * 60 + parseInt(seconds));
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(e.target.value);
  };

  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeconds(e.target.value);
  };

  return (
    <div>
      <h1>タイマー</h1>
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
      <InputField label=" 分" value={minutes} onChange={handleMinutesChange} />
      <InputField label=" 秒" value={seconds} onChange={handleSecondsChange} />
      <div className={styles.clock}>
        {Math.floor(totalSeconds / 60)}:
        {totalSeconds % 60 < 10 ? `0${totalSeconds % 60}` : totalSeconds % 60}
      </div>
      <Button onClick={handleStart} disabled={isActive} text="開始" />
      <Button
        onClick={toggleActive}
        disabled={!isActive && totalSeconds === 0}
        text={isActive ? "一時停止" : "再開"}
      />
      <Button
        onClick={handleReset}
        disabled={!isActive && totalSeconds === 0}
        text="キャンセル"
      />
      <div>
        <label className={styles.inputLabel}>通知音</label>
        <SelectBox values={sounds} onChange={changeSound} />
      </div>
    </div>
  );
};

export default Timer;
