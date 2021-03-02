import React from "react";
import { useSelector } from "react-redux";
import Folder from "./Folder";

const Archive = () => {
  const folders = useSelector((state) => state.classificador.offices);
  return (
    <div className="columns is-multiline">
      {folders.map((folder) => (
        <div className="column is-4">
          <Folder code={folder.code} abr={folder.abr} />
        </div>
      ))}
    </div>
  );
};

export default Archive;
