import './Button.css';

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  size: ButtonSize;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const ButtonExercise: React.FC<ButtonProps> = ({ size, onClick, children }) => {
  return (
    <button className={`button ${size}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonExercise;