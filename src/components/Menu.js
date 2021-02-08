import React from 'react';
import Filters from './Filters';
import Sorting from './Sorting';
import { useSelector } from 'react-redux';

const Menu = () => {

    let hideFilters = useSelector(state => state.hideFilters);

    return (
        <div className="menu-container">
            <table className="menu">
                <Sorting />
            </table>
            <div className="menu">
                {hideFilters ? null : <Filters />}
            </div>
        </div>);

}

export default Menu;