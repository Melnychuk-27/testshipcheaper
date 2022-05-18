import React from "react";

//styles
import s from "./SelectInput.module.scss";

//hooks
import { useOutside } from "../../../../hooks/useOutside";

//svgs
import { arrowSvg } from "../../svgs/arrowSvg";

type TSelectInputProps = {
  marginTop?: string;
  label?: any;
  name?: string;
  className?: string;
  required?: boolean;
  error?: any;
  register?: any;
  defaultOption?: any;
  options?: any;
  setValue: any;
  value?: any;
  sendTitle?: boolean;
  validation?: any;
};

const SelectInput = ({
  label,
  options,
  marginTop,
  register,
  required,
  setValue,
  defaultOption,
  name,
  error,
  value,
  className,
  sendTitle,
  validation,
}: TSelectInputProps) => {
  const [option, setOption] = React.useState<{
    title: string;
    value: any;
  } | null>();

  const { ref, isShow, setIsShow } = useOutside(false);

  const onSetOptionHandler = (el: any) => {
    setOption(el);
    setIsShow(false);
  };
  React.useEffect(() => {
    register && register(name, validation);
  }, []);

  React.useEffect(() => {
    value &&
      setOption(() => {
        const findOption = options.find((item: any) => {
          return item?.title === value;
        });
        return {
          title: findOption?.title,
          value: findOption?.value,
        };
      });
  }, [value]);

  React.useEffect(() => {
    if (!!option) {
      const findOption = sendTitle ? option?.title : option?.value;

      setValue &&
        name &&
        setValue(name, findOption, {
          shouldValidate: true,
        });
      setValue && !name && setValue(findOption);
    }
  }, [option]);
  return (
    <>
      <div
        className={`${s.root} ${className}`}
        onMouseEnter={() => setIsShow(() => true)}
        onMouseLeave={() => setIsShow(() => false)}
        ref={ref}
        style={{
          marginTop: marginTop ? marginTop : "",
        }}
      >
        <label className={s.label}>
          {label} {required && <span className={s.required}>*</span>}
        </label>
        <div className={s.wrapperSelect}>
          <div
            className={`${s.select}  ${isShow ? s.active : ""} ${
              !!error ? s.error : ""
            }`}
          >
            <span>
              {option?.title
                ? option?.title
                : defaultOption
                ? defaultOption
                : ""}
            </span>
            {options.length > 0 && (
              <span
                className={`${s.arrow}  ${isShow ? s.reverse : ""}`}
                dangerouslySetInnerHTML={{ __html: arrowSvg }}
              />
            )}
          </div>
          {isShow && options.length > 0 && (
            <div className={s.dropdown}>
              {options &&
                options?.map((el: any, index: number) => (
                  <div
                    key={index}
                    className={s.option}
                    onClick={() => {
                      onSetOptionHandler({
                        title: el.title,
                        value: el.value,
                      });
                      setIsShow(() => false);
                    }}
                  >
                    {el?.title ? el.title : el.value}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SelectInput;
