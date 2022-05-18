import { useEffect } from "react";

//styles
import s from "./main.module.scss";

//hooks
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

//ui
import Contaiter from "../ui/Containers/container/Contaiter";
import ButtonMain from "../ui/Buttons/ButtonMain/ButtonMain";

//svgs
import { basketSvg } from "../ui/svgs/basketSvg";

//db
import { headTableData } from "../../db/main/main";

//ts
import { IDataTable } from "../../ts/interfaces/main";
import { EModalType } from "../../ts/enums/modals";

//redux
import { deleteItemInTable } from "../../redux/Main/main";
import {
  setModalWindowChildrenType,
  setModalWindowStatus,
} from "../../redux/App/app";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  const { dataTable } = useAppSelector((state) => state.main);

  return (
    <main className={s.main}>
      <Contaiter>
        <ButtonMain
          content="add"
          mode="fullGreen"
          maxWidth="50px"
          onClick={() => {
            dispatch(setModalWindowChildrenType(EModalType.mainTableData));
            dispatch(setModalWindowStatus(true));
          }}
        />
        <div className={s.wrapperTable}>
          <table className={s.table}>
            <thead>
              {headTableData.length && (
                <tr className={s.headTable}>
                  {headTableData.map((item: string, index: number) => (
                    <th key={index}>{item}</th>
                  ))}
                </tr>
              )}
            </thead>
            {dataTable.length ? (
              <tbody>
                {dataTable.map((item: IDataTable, index: number) => (
                  <tr className={s.itemTable} key={index}>
                    <td>
                      <div
                        onClick={() => {
                          dispatch(deleteItemInTable(item.id));
                        }}
                        className={s.deleteItem}
                        dangerouslySetInnerHTML={{ __html: basketSvg }}
                      />
                    </td>
                    <td>{item.company}</td>
                    <td>{item.name}</td>
                    <td>{item.additional}</td>
                    <td>{item.street}</td>
                    <td>{item.postalCode}</td>
                    <td>{item.country}</td>
                    <td>{item.iban}</td>
                    <td>{item.bic}</td>
                    <td>{item.bankName}</td>
                    <td>{item.fax}</td>
                    <td>{item.email}</td>
                    <td>{item.birthday}</td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tr className={s.emptyBasket}>
                <td>Таблиця порожня</td>
              </tr>
            )}
          </table>
        </div>
      </Contaiter>
    </main>
  );
};

export default Main;
