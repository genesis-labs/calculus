
export default function indexReducer(state = {}, action) {
    switch (action.type) {
        case 'DEFAULT_EVENT':
            return { data: action.data};
        default:
            return state;
    }
}