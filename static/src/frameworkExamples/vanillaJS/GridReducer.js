export default function gridReducer(state = {width:'320px', height:'640px'}, action) {
    switch (action.type) {
        case 'DEFAULT_EVENT':
            return {width:'700px', height:'550px'};
        default:
            return state;
    }
}