const filterList = (playlist, activeFilters) => {
    let filteredList = [];
    Object.entries(activeFilters).forEach(entry => {
        const [key, value] = entry;
        if (value) {
            const genreList = playlist.filter(song => song.genre === key);
            filteredList = [...filteredList, ...genreList];
        }
    });
    return filteredList;
}

export default filterList;