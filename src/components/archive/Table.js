import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { columns } from "../../utils/options";
import { useSelector } from "react-redux";
import DispatchModal from "./DispatchModal";
import store from "../../redux/store";
import { deleteRecord } from "../../redux/actions/records";

const Table = () => {
  const data = useSelector((state) => state.records);
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const options = {
    filterType: "dropdown",
    selectableRows: "single",
    customToolbarSelect: (selectedRows, displayData, setSelectedRows) => {
      return (
        <div class="buttons">
          <DispatchModal
            modal={modal}
            closeModal={closeModal}
            doc={data.documents[selectedRows.data[0].dataIndex]}
          />
          <button onClick={openModal} class="button is-primary is-outlined">
            <span class="icon is-small">
              <i class="fas fa-edit"></i>
            </span>
            <span>Despacho</span>
          </button>
          <button class="button is-warning is-outlined">
            <span class="icon is-small">
              <i class="fas fa-file-signature"></i>
            </span>
            <span>Protocolo</span>
          </button>
          <button
            onClick={() =>
              store.dispatch(
                deleteRecord(data.documents[selectedRows.data[0].dataIndex]._id)
              )
            }
            class="button is-danger is-outlined"
          >
            <span class="icon is-small">
              <i class="fas fa-trash"></i>
            </span>
            <span>Apagar</span>
          </button>
          &nbsp; &nbsp;
        </div>
      );
    },
  };
  return (
    <MUIDataTable
      title={"Arquivo"}
      data={data.documents}
      columns={columns}
      options={options}
    />
  );
};

export default Table;
