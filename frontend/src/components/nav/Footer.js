import React from "react";
// import './Footer.css';

export default function Footer() {
    function getYear() {
        return new Date().getFullYear();
    }
    
    return (
        <footer>
            <p>&copy; {this.getYear()} Dustin Friesen. All rights reserved.</p>
        </footer>
    )
}