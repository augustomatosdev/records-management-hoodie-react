import React, { useEffect, useState } from "react";
import DocForm from "./DocForm";
import { PresetStore } from "../../../utils/db";
import store from "../../../redux/store";
import { addRecord } from "../../../redux/actions/records";
import { useSelector } from "react-redux";

const countersDb = new PresetStore("counters");
countersDb.sync();

const Registration = () => {
  const [state, setState] = useState({
    registerType: "Entrada",
    documentType: "Nota",
    registerNum: "",
    referenceNum: "",
    receivedDate: "",
    sentDate: "",
    office: "Gabinete do Governador Provincial",
    subject: "",
    counters: [],
  });
  const counter = state.counters.filter((el) => el.type === state.documentType);
  const officeAbr = useSelector((state) => state.classificador.offices).filter(
    (office) => office.title === state.office
  );
  console.log(officeAbr);

  useEffect(() => {
    countersDb
      .findAll()
      .then((data) => {
        setState({ ...state, counters: data, registerNum: data[3].num });
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      registerType: state.registerType,
      documentType: state.documentType,
      registerNum: state.registerNum,
      referenceNum:
        state.registerType === "Saida"
          ? Number(counter[0].num)
          : Number(state.referenceNum),
      receivedDate: state.receivedDate,
      sentDate: state.sentDate,
      office: state.office,
      subject: state.subject,
      abr: officeAbr[0].abr,
      code: officeAbr[0].code,
    };

    if (state.registerType === "Saida") {
      countersDb
        .update({ ...counter[0], num: counter[0].num + 1 })
        .then(console.log("incremented doc."))
        .catch((err) => console.log(err));
    }

    countersDb
      .find("e756970e8e1eb58b60b177abc900e371")
      .then((doc) => {
        return countersDb.update({ ...doc, num: doc.num + 1 });
      })
      .then(() => store.dispatch(addRecord(data)))
      .catch((err) => console.log(err));
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <DocForm
      state={state}
      onChange={onChange}
      onSubmit={onSubmit}
      counter={counter}
    />
  );
};

export default Registration;
