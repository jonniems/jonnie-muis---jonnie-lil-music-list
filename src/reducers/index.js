import { combineReducers } from 'redux';
import createSong from './createSong';
import hideFilters from './hideFilters';
import activeSort from './activeSorting';
import updateLibrary from './updateLibrary';
import activeFilters from './activeFilters';

const allReducers = combineReducers({
    createSong,
    hideFilters,
    activeSort,
    updateLibrary,
    activeFilters,
});

export default allReducers;