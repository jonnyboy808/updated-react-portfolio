import React from "react";

function Navbar(props) {
    const { menuItem = [], setCurrentPage, currentPage } = props;

    return (
      <nav>
        <ul>
          {menuItem.map((Page) => (
            <li
              className={`${ currentPage.name === Page.name && "navActive"}`} key={Page.name} >
              <span onClick={() => { setCurrentPage(Page); }}>
                {Page.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
  export default Navbar;