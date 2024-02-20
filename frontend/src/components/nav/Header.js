import React from "react";
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
                    <li>logout</li>
                </ul>
            </nav>
        </header>
    )
}