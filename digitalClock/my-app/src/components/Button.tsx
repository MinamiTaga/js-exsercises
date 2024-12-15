"use client"; // This is a client component 👈🏽

interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, text }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
