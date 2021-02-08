import React from 'react';

const starRating = (ratingNumber) => {
    let starArray = [];
    for (let num = 0; num < ratingNumber; num++) {
        starArray = [...starArray, <i key={num} className="fas fa-star"></i>];
    }
    return starArray;
}

export default starRating;
