"use client"; // This is a client component 👈🏽
import styles from "../app/page.module.css";

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>
        <input
          type="number"
          value={value}
          min={0}
          onChange={onChange}
          className={styles.timerInput}
        />
        {label}
      </label>
    </div>
  );
};

export default InputField;
