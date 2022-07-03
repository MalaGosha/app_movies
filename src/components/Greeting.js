import React from "react";
import {Link} from "react-router-dom";
import '../style/inAndOutPage.css';

export default function Greeting() {
    return (
        <div className='greeting_page'>
            <div className='greeting'>
                <h1>Hello my Padawan!</h1>
                <h2>Are you looking for a movie? </h2>
            </div>
            <div className='button'>
                <Link to="/main-page">
                    <button className='btn_greeting'>Yes!
                    </button>
                </Link>
                <Link to="/farewell-page">
                    <button className='btn_greeting'>
                        No, I'm not interesting
                    </button>
                </Link>
            </div>

        </div>
    );
}
