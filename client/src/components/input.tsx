type InputType = {
  attributes: React.HTMLAttributes<HTMLInputElement>;
};

function Input({ attributes }: InputType): JSX.Element {
  return <input {...attributes} />;
}

export default Input;
