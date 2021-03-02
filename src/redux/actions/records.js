import { PresetStore } from "../../utils/db";
import { GET_RECORDS } from "../types";
var records = new PresetStore("records");
records.sync();

export const addRecord = (data) => (dispatch) => {
  records
    .add(data)
    .then((record) => {
      dispatch(getRecords());
      alert("Documento adicionado com sucesso.");
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getRecords = () => (dispatch) => {
  records
    .findAll()
    .then((records) => {
      dispatch({
        type: GET_RECORDS,
        payload: records,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteRecord = (id) => (dispatch) => {
  records
    .remove(id)
    .then(() => {
      console.log("deleted:", id);
      alert("Registro deletado com sucesso!");
      dispatch(getRecords());
    })
    .catch((err) => {
      console.log(err);
    });
};
