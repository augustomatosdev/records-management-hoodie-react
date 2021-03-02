import React from "react";
import { useSelector } from "react-redux";
import RegistInput from "./RegistInput";

const DocForm = ({ onChange, onSubmit, state, counter }) => {
  const offices = useSelector((state) => state.classificador.offices);

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="field is-horizontal">
          <div className="field-body">
            <div class="field">
              <label class="label">Tipo de registro</label>
              <div class="control">
                <div class="select is-fullwidth">
                  <select
                    value={state.registerType}
                    name="registerType"
                    onChange={onChange}
                  >
                    <option value="Entrada">Entrada</option>
                    <option value="Saida">Saida</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Tipo de documento</label>
              <div class="control">
                <div class="select is-fullwidth">
                  <select
                    value={state.documentType}
                    name="documentType"
                    onChange={onChange}
                  >
                    <option value="Nota">Nota</option>
                    <option value="Oficio">Oficio</option>
                    <option value="Despacho">Despacho</option>
                    <option value="Protocolo">Protocolo</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RegistInput onChange={onChange} state={state} counter={counter} />

        <div className="field is-horizontal">
          <div className="field-body">
            <div class="field">
              <label class="label">Data de entrada</label>
              <div class="control">
                <input
                  name="receivedDate"
                  value={state.receivedDate}
                  onChange={onChange}
                  class="input"
                  type="date"
                  placeholder="Text input"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Data do documento</label>
              <div class="control">
                <input
                  name="sentDate"
                  value={state.sentDate}
                  onChange={onChange}
                  class="input"
                  type="date"
                  placeholder="Text input"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Procedência</label>
          <div class="control">
            <div class="select is-fullwidth">
              <select name="office" onChange={onChange}>
                {offices.map((office) => (
                  <option value={office.title}>
                    {office.code} - {office.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Assunto</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Assunto do documento..."
              name="subject"
              onChange={onChange}
              value={state.subject}
            ></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Registrar</button>
          </div>
          <div class="control">
            <button type="button" class="button is-link is-light">
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DocForm;
