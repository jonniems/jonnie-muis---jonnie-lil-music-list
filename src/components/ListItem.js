import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../actions';
import starRating from '../functions/starRating';

const ListItem = (props) => {

    const dispatch = useDispatch();
    const ratingNumber = props.song.rating;

    return (
        <tr className="song-item"
            key={props.song.id}
        >
            <td>
                <img className="song-item-image"
                    src={props.song.url}
                    alt="album art">
                </img>
            </td>
            <td className="song-item-data"><h3>{props.song.title}</h3></td>
            <td className="song-item-data">{props.song.artist}</td>
            <td className="song-item-data">{starRating(ratingNumber)}</td>
            <td className="song-item-data">{props.song.genre}</td>
            <td className="song-item-data">
                <div className="delete"
                    onClick={() => {
                        dispatch(remove(props.song.id))
                    }}>
                    <i className="fas fa-trash-alt"></i>
                </div>
            </td>
        </tr>
    );

}

export default ListItem;