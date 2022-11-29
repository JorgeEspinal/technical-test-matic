import './style.css';

type Props = {
  register?: () => {};
  htmlFor: string;
  id: string;
  textLabel: string;
  placeHolder?: string;
  type: 'text' | 'textarea';
  value?: string;
  ref?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextArea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Input = ({
  register,
  htmlFor,
  placeHolder,
  textLabel,
  id,
  type,
  value,
  ref,
  onChange,
  onChangeTextArea,
}: Props) => {
  const label = (
    <label htmlFor={htmlFor} className="form-control__label">
      {textLabel} <span aria-label="required">*</span>
    </label>
  );

  if (type === 'textarea')
    return (
      <>
        {label}
        <textarea
          className="form-control__input form-control__input--textarea"
          {...register}
          id={id}
          placeholder={placeHolder}
          value={value}
          ref={ref}
          onChange={onChangeTextArea}
        />
      </>
    );

  return (
    <>
      {label}
      <input
        className="form-control__input"
        {...register}
        id={id}
        type={type}
        placeholder={placeHolder}
        value={value}
        ref={ref}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
