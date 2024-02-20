import React from "react";
// import './Footer.css';

export default function Footer() {
    const getYear= () => {
        return new Date().getFullYear();
    }
    
    return (
        <footer>
            <p>&copy; {getYear()} Dustin Friesen. All rights reserved.</p>
        </footer>
    )
}