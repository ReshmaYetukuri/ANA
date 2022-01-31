export interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  inputLength?: number;
  inputFocus?: boolean;
  className?: string;
}

const Input = (props: InputProps) => {
  const { type, changeHandler, name, value, inputLength, className } = props;

  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={changeHandler}
      maxLength={inputLength}
      className={className}
    />
  );
};

export default Input;
