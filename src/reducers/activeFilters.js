const defaultFilters = {
    'Soul': false,
    'Rock': false,
    'Pop': false,
    'Country': false,
    'Nederlandstalig': false,
    'Dance': false,
    'New Wave': false,
    'Folk': false,
    'Hip Hop': false
}

const activeFilters = (state = defaultFilters, action) => {
    switch (action.type) {
        case 'GET-FILTERS':
            let filters = { ...state };
            const { value, checked } = action.payload;
            filters = { ...filters, [value]: checked };
            return filters;
        default:
            return state;
    }
}

export default activeFilters;