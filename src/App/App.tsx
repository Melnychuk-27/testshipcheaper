import React from "react";
import { Route, Routes } from "react-router-dom";

//styles
import "./App.scss";

//app
import { publicRoutes } from "./Routes/routes";

//ui
import { selectModal } from "../components/ui/Modals/selectModal";
import ModalWrapper from "../components/ui/Modals/ModalComponents/ModalWrapper/ModalWrapper";

//hooks
import { useAppSelector } from "../hooks/redux";

const App: React.FC = () => {
  const { modalWindowStatus, modalWindowChildrenType } = useAppSelector(
    (state) => state.app
  );

  return (
    <>
      {modalWindowStatus && (
        <ModalWrapper>{selectModal(modalWindowChildrenType)}</ModalWrapper>
      )}
      <Routes>
        {publicRoutes.map(({ path, component: Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Routes>
    </>
  );
};

export default App;
