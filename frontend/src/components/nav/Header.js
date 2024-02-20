import React from "react";
import Home from "../pages/Home";
// import './Header.css';
// import { useAuth0 } from '@auth0/auth0-react';
// import LogoutButton from '../auth/LogoutButton';

export default function Header() {
    // const { isAuthenticated } = useAuth0();
    return (
        <header>
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