const defaultSort = {
    active: false,
    param: '',
    sortDirection: false
};

const activeSort = (state = defaultSort, action) => {
    switch (action.type) {
        case 'SORT':
            const sortCriteria = {
                active: true,
                param: action.payload,
                sortDirection: !state.sortDirection
            };
            return sortCriteria;
        default:
            return state;
    }
}

export default activeSort;