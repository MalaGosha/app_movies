import React from "react";
import {Link} from "react-router-dom";
import Search from "./Search";
import '../style/navbar.css';
import '../img/starWars.png';


export default function Navbar() {
    return (
        <div className='navbar'>
            <Search/>
            <Link className='navbar_link' to='/main-page/in-cinemas'>
                <div className='btn_navbar'>
                    Box Office
                </div>
            </Link>
            <Link to='/main-page/coming-soon'>
                <div className='btn_navbar'>
                    Coming soon
                </div>
            </Link>
        </div>
    )
}
