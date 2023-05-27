import React from "react";
import Navbar from './Navbar';

function Header(props) {
    const {pages, setCurrentPage, currentPage } = props
    return (
        <header>
            <h1>Jonathan Borroel</h1>
            <Navbar pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </header>
    );
}

export default Header;