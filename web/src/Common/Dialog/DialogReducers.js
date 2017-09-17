import Materialize from 'materialize-css';

export default (state = [], action) => {
    if (action.type === 'SHOW_SUCCESS')
        Materialize.toast(`Salvo com sucesso`, 4000);
    else if (action.type === 'SHOW_ERROR')
        Materialize.toast(`Ops, ocorreu um erro...`, 4000);
    else if (action.type === 'SHOW_DELETE_SUCCESS')
        Materialize.toast(`Excluído com sucesso`, 4000);
    return state;
}