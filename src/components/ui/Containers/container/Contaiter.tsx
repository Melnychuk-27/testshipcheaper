//styles
import s from "./container.module.scss";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={s.root}>{children}</div>;
};

export default Container;
