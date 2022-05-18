//styles
import s from "./input.module.scss";

type TInputProps = {
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  label?: string;
  id: string;
  type?: string;
  name: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  maxWidth?: string;
  error?: any;
  register?: any;
  onChange?: any;
  validation?: any;
  icon?: any;
  value?: any;
};

const Input = ({
  label,
  type,
  name,
  placeholder,
  className,
  marginTop,
  marginRight,
  required,
  error,
  register,
  marginLeft,
  onChange,
  maxWidth,
  validation,
  icon,
  value,
}: TInputProps) => {
  return (
    <div
      className={`${s.root}  ${className ? className : ""}`}
      style={{
        marginTop: marginTop ? marginTop : "",
        maxWidth: maxWidth ? maxWidth : "",
        marginLeft: marginLeft ? marginLeft : "",
        marginRight: marginRight ? marginRight : "",
      }}
    >
      {label ? (
        <label htmlFor={label}>
          {label}
          {required ? <span className={s.required}>*</span> : ""}
        </label>
      ) : (
        ""
      )}
      {register && name ? (
        <div className={`${s.wrapperInput} ${!!error ? s.errorInput : ""}`}>
          <input
            id={label}
            placeholder={placeholder}
            name={name}
            type={type || "text"}
            {...register(name, validation)}
          >
            {icon && <div className={s.icon}>{icon}</div>}
          </input>
          {!!error && (
            <div className={s.error}>
              <span>{error?.message}</span>
            </div>
          )}
        </div>
      ) : (
        <div className={`${s.wrapperInput} ${!!error ? s.errorInput : ""}`}>
          <input
            id={label}
            placeholder={placeholder}
            name={name}
            value={value}
            type={type}
            onChange={(e: any) => onChange(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
