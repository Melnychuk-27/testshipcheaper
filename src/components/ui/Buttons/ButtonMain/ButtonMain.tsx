//styles
import s from "./buttonMain.module.scss";

type TButtonMainProps = {
  onClick?: any;
  content: any;
  maxWidth?: string;
  isNotButton?: true;
  mode?: "fullGreen";
};

const ButtonMain = ({
  onClick,
  content,
  mode,
  maxWidth,
  isNotButton,
}: TButtonMainProps) => {
  return (
    <>
      {isNotButton ? (
        <div
          className={`  ${s.button} ${mode ? s[mode] : ""}`}
          style={{ maxWidth: maxWidth ? maxWidth : "" }}
          onClick={onClick}
        >
          {content}
        </div>
      ) : (
        <button
          className={`  ${s.button} ${mode ? s[mode] : ""}`}
          style={{ maxWidth: maxWidth ? maxWidth : "" }}
          onClick={onClick}
        >
          {content}
        </button>
      )}
    </>
  );
};

export default ButtonMain;
