import './input.css';

type InputProps = {
  className?: string;
  otherInputAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
};

function Input(props: InputProps) {
  const { className, otherInputAttributes } = props;

  return <input className={`input ${className || ''}`} {...otherInputAttributes} />;
}

export default Input;
