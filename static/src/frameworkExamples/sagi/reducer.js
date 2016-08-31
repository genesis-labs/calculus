

export default function indexReducer(state = {}, action) {
    switch (action.type) {
        case 'UPDATE_DATA':
            return { newData: action.newData};
        default:
            return state;
    }
}