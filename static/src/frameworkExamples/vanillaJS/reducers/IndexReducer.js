
export default function indexReducer(state = {}, action) {
    console.log('imale');
    switch (action.type) {
        case 'DEFAULT_EVENT':
            return { data: 'hiushhhhhhhhhhhh'};
        default:
            return state;
    }
}