import React from "react";
import Home from "../pages/Home";
import '../../index.css';
// import './Header.css';
// import { useAuth0 } from '@auth0/auth0-react';
// import LogoutButton from '../auth/LogoutButton';

export default function Header() {
    // const { isAuthenticated } = useAuth0();
    return (
        <header className="fixed-div">
            <nav>
                <ul className="navbar">
                    {/* {isAuthenticated && (
                        <>
                            <li><LogoutButton/></li>
                        </>
                    )} */}
                    <li><a href="/">logout</a></li>
                </ul>
            </nav>
        </header>
    )
}