import { FC } from "react";
import { paths } from "./paths";

import Main from "../../pages/Main/Main";

type TRoute = {
  path: string;
  component: FC;
};

type TRoutes = Array<TRoute>;

export const publicRoutes: TRoutes = [
  {
    path: paths?.main,
    component: Main,
  },
];
