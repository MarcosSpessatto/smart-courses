import Materialize from 'materialize-css';
import * as dialogTypes from './DialogActionTypes';

export default (state = [], action) => {
    if (action.type === dialogTypes.SHOW_SUCCESS)
        Materialize.toast(`Salvo com sucesso`, 4000);
    else if (action.type === dialogTypes.SHOW_ERROR)
        Materialize.toast(`Ops, ocorreu um erro...`, 4000);
    else if (action.type === dialogTypes.SHOW_DELETE_SUCCESS)
        Materialize.toast(`Excluído com sucesso`, 4000);
    return state;
}