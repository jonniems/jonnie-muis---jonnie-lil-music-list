import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {

    return (
        <div className="about-container">
            <h1>About Me</h1>
            <h3>I <span>❤️</span> Music</h3>
            <p>I just love bothering the world with all the music I love. Creating lists of my favorite songs per genre, debating with friends over who is the best singer (male: Otis Redding, female: Bettye Swan) and most of all: listen to music.</p>
            <p>Of course it is tempting to say that all the best music was made in the late 60's and early 70's (and it is kind of true), but there is still so much wonderful music made. There are beautiful songs in the style of the late 60's (just listen to St. Paul & The Broken Bones or Sharon Jones & The Dap-Kings), but also new, modern music can be breathtaking (A$AP Rocky is KING).</p>
            <p>I will never stop listening to music. If you want to know my favorites at the moment, check out my Lil Music List</p>
            <Link to='/'>
                Return to Jonnie Lil Music List
            </Link>
        </div>
    );
}

export default About;