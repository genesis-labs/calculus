export default function mapReducer(state = {}, action) {
    switch (action.type) {
        case 'ROW_SELECTED':
            return { data: action.data};
        default:
            return state;
    }
}