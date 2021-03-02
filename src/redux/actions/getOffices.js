import { PresetStore } from "../../utils/db";
import { SET_OFFICES, SET_ERROR } from "../types";
var classificador = new PresetStore("classificador");
classificador.sync();

export const getOffices = () => (dispatch) => {
  classificador
    .findAll()
    .then((data) => {
      dispatch({
        type: SET_OFFICES,
        payload: data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERROR,
        payload: {
          offices:
            "Ocorreu um erro ao obter lista de Gabinetes, por favor tente novamente ou solicite apoio tecnico!",
        },
      });
    });
};
