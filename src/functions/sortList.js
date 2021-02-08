const sortList = (playlist, activeSort) => {
    const { param, sortDirection } = activeSort;
    const sortedList = playlist.map(song => song);

    const sortDown = (songA, songB) => {
        if (songA < songB) {
            return -1;
        }
        if (songA > songB) {
            return 1;
        }
        return 0;
    };

    const sortUp = (songA, songB) => {

        if (songA < songB) {
            return 1;
        }
        if (songA > songB) {
            return -1;
        }
        return 0;
    };

    if (param === 'rating') {
        if (sortDirection) {
            sortedList.sort((a, b) => {
                const songA = a[param];
                const songB = b[param];
                return sortDown(songA, songB);
            });
        } else {
            sortedList.sort((a, b) => {
                const songA = a[param];
                const songB = b[param];
                return sortUp(songA, songB);
            });
        }
    } else if (param === 'title' || param === 'artist') {
        if (sortDirection) {
            sortedList.sort((a, b) => {
                const songA = a[param].toUpperCase();
                const songB = b[param].toUpperCase();
                return sortDown(songA, songB);
            });
        } else {
            sortedList.sort((a, b) => {
                const songA = a[param].toUpperCase();
                const songB = b[param].toUpperCase();
                return sortUp(songA, songB);
            });
        }
    }

    return sortedList;
}

export default sortList;