import Materialize from 'materialize-css';

export default (state = [], action) => {
    if (action.type === 'ERROR')
        Materialize.toast(action.payload, 4000);

    return state;
}