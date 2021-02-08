import musicLibrary from '../functions/musicLibrary';

const updateLibrary = (state = musicLibrary, action) => {
    switch (action.type) {
        case 'ADD':
            const newSong = action.payload;
            newSong.id = state.length + 1;
            if (newSong.url === '') {
                newSong.url = 'https://pngimg.com/uploads/vinyl/vinyl_PNG21.png';
            }
            return [newSong, ...state];
        case 'REMOVE':
            const songId = action.payload;
            const filteredList = state.filter(song => song.id !== songId);
            let indexId = 0;
            const updatedList = filteredList.map(song => {
                indexId++;
                return { ...song, id: indexId };
            });
            return updatedList;
        default:
            return state;
    }
}

export default updateLibrary;