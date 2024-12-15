"use client"; // This is a client component 👈🏽
import styles from "../app/page.module.css";

export interface SelectValues {
  value: string;
  label: string;
}

interface SelectBoxProps {
  values: SelectValues[];
  onChange: (e: string) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({ values, onChange }) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className={styles.soundsInput}
    >
      {values.map((value, i) => (
        <option key={i} value={value.value}>
          {value.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
