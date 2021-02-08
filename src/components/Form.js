import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, updateForm, resetForm } from '../actions';

const AddForm = () => {

    const dispatch = useDispatch();
    const newSong = useSelector(state => state.createSong);
    const ratings = [5, 4, 3, 2, 1];
    const genres = ['Soul', 'Rock', 'Pop', 'Country', 'Nederlandstalig', 'Dance', 'New Wave', 'Folk', 'Hip Hop'];

    return (
        <form
            className="add-song-form"
            name="add-song"
            onSubmit={(event) => {
                event.preventDefault()
                dispatch(add(newSong))
                dispatch(resetForm())
            }}
        >

            <input
                type="text"
                name="title"
                placeholder="Song Title"
                value={newSong.title}
                onChange={(event) => dispatch(updateForm(event.target))}
                className="input-field"
                required={true}
            >
            </input>

            <input
                type="text"
                name="artist"
                placeholder="Artist"
                value={newSong.artist}
                onChange={(event) => dispatch(updateForm(event.target))}
                className="input-field"
                required={true}
            >
            </input>

            <select
                name="genre"
                onChange={(event) => dispatch(updateForm(event.target))}
                defaultValue="genre"
            >
                <option
                    value="genre"
                    disabled
                    hidden
                >
                    -- Select Genre --
                </option>
                {genres.map(genre => {
                    return (
                        <option
                            value={genre}
                            key={genres.indexOf(genre)}
                        >
                            {genre}
                        </option>
                    )
                })}
            </select>

            <span className="rating-field">
                {ratings.map(number => {
                    return (
                        <label key={number}>
                            <input
                                type="radio"
                                name="rating"
                                value={number}
                                onChange={(event) => dispatch(updateForm
                                    (event.target)
                                )}
                                className="radio"
                            >
                            </input>
                            <i className="fas fa-star"></i>
                        </label>
                    )
                })}
                Rating:
            </span>

            <input
                type="url"
                name="url"
                placeholder="Cover Image Url"
                value={newSong.url}
                onChange={(event) => dispatch(updateForm
                    (event.target)
                )}
                className="input-field"
            >
            </input>

            <button
                type="submit"
                className="btn add-btn"
            >
                Add
            </button>

            <button
                type="reset"
                className="btn cancel-btn"
                onClick={() => {
                    dispatch(resetForm()
                    )
                }}
            >
                Cancel
            </button>

        </form>
    );
}

export default AddForm;