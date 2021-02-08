const defaultSong = {
    title: '',
    artist: '',
    genre: '',
    rating: 0,
    url: '',
}

const createSong = (state = defaultSong, action) => {
    switch (action.type) {
        case 'UPDATE-FORM':
            const { name, value } = action.payload;
            return { ...state, [name]: value };
        case 'RESET-FORM':
            return defaultSong;
        default:
            return state;
    }
}

export default createSong;
