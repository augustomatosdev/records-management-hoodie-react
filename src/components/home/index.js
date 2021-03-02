import React from "react";
import Archive from "./archive";
import Registration from "./registration";

const Home = () => {
  return (
    <div className="section">
      <div className="columns">
        <div className="column is-6">
          <h1 className="subtitle has-text-centered has-text-weight-bold">
            REGISTRAR NOVO DOCUMENTO
          </h1>
          <Registration />
        </div>
        <div className="column is-6">
          <h1 className="subtitle has-text-centered has-text-weight-bold">
            ARQUIVO
          </h1>
          <Archive />
        </div>
      </div>
    </div>
  );
};

export default Home;
