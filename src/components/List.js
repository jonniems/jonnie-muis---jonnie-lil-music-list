import React from 'react';
import ListItem from './ListItem';
import filterList from '../functions/filterList';
import sortList from '../functions/sortList';
import { useSelector } from 'react-redux';

const List = () => {
    const musicLibrary = useSelector(state => state.updateLibrary);
    const activeFilters = useSelector(state => state.activeFilters);
    const activeSort = useSelector(state => state.activeSort);
    const applyFilters = Object.values(activeFilters).filter(value => value === true);

    const playlist = () => {
        let list = musicLibrary.map(song => song);
        if (applyFilters.length > 0) {
            list = filterList(list, activeFilters);
        }
        if (activeSort.active) {
            list = sortList(list, activeSort);
        }
        return list;
    };

    return (
        <div className="playlist-container">
            <table className="playlist">
                <tbody>
                    {playlist().map(song => {
                        return (
                            <ListItem
                                song={song}
                                key={song.id}
                            />
                        )
                    })}
                </tbody>
            </table>
        </div>
    );

}

export default List;