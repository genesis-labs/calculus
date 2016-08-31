export default function gridReducer(state = {data:'a'}, action) {
    switch (action.type) {
        case 'DEFAULT_EVENT':
            return { data: action.data};
        default:
            return state;
    }
}