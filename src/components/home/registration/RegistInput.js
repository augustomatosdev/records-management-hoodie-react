import React from "react";

const RegistInput = ({ state, onChange }) => {
  const counter = state.counters.filter((el) => el.type === state.documentType);

  return (
    <div className="field is-horizontal">
      <div className="field-body">
        <div class="field">
          <label class="label">Nº de registro</label>
          <div class="control">
            <input
              class="input"
              readOnly
              value={state.registerNum}
              type="text"
              placeholder="Text input"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Nº de referência</label>
          <div class="control">
            {state.registerType === "Entrada" ? (
              <input
                onChange={onChange}
                class="input"
                type="text"
                placeholder="Text input"
                name="referenceNum"
                value={state.referenceNum}
              />
            ) : (
              <input
                readOnly
                class="input"
                value={counter[0].num}
                type="text"
                placeholder="Text input"
                onChange={onChange}
                name="referenceNum"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistInput;
