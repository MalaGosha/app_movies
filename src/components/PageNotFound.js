import React from "react";
import { Link } from "react-router-dom";
import '../style/inAndOutPage.css';

export default function PageNotFound() {
    return (
        <div className="page_not_found">
            <img src={'https://i.pinimg.com/originals/c0/6c/9d/c06c9d63bda3f0a823aee1b2f47b0457.png'} alt='Page not Found' />
            <Link to="/">
                <button className='go_back'>
                    Go back
                </button>
            </Link>
        </div>
    );
}

