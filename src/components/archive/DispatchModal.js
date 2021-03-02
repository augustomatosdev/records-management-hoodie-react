import React, { useEffect, useState } from "react";
import { PresetStore } from "../../utils/db";

const DispatchModal = ({ doc, modal, closeModal }) => {
  const dispatchDb = new PresetStore("dispatches");
  dispatchDb.sync();

  const [state, setState] = useState({
    hasDispatch: false,
    data: {},
    text: "",
  });

  useEffect(() => {
    dispatchDb
      .find(doc._id)
      .then((doc) => {
        setState({ ...state, hasDispatch: true, data: doc });
      })
      .catch((err) => console.log("err", err));
    setState({
      hasDispatch: false,
      data: {},
      text: "",
    });
  }, [modal]);

  const onChange = (e) => {
    setState({ ...state, text: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      _id: doc._id,
      text: state.text,
    };
    dispatchDb.add(data).then((doc) => {
      setState({ ...state, hasDispatch: true, data: doc });
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div class={modal ? "modal is-active" : "modal"}>
        <div class="modal-background" onClick={closeModal}></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">
              {doc.documentType} - {doc.referenceNum} - {doc.abr}
            </p>
            <button
              class="delete"
              aria-label="close"
              onClick={closeModal}
            ></button>
          </header>
          {state.hasDispatch ? (
            <section class="modal-card-body">{state.data.text}</section>
          ) : (
            <section class="modal-card-body">
              <div class="field">
                <label class="label">Inserir despacho</label>
                <div class="control">
                  <textarea
                    class="textarea"
                    placeholder="Escreva o despacho recaido sobre este documento"
                    onChange={onChange}
                    required
                  ></textarea>
                </div>
              </div>
            </section>
          )}
          <footer class="modal-card-foot">
            {!state.hasDispatch && (
              <button class="button is-success">Salvar</button>
            )}
            <button onClick={closeModal} type="button" class="button">
              Cancelar
            </button>
          </footer>
        </div>
      </div>
    </form>
  );
};

export default DispatchModal;
