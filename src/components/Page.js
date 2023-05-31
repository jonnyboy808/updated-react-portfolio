import React from "react";
import About from "./About";
import Portfolio from "./Project";
import Contact from "./Contact";
import Resume from "./Resume";

function Page ({ currentPage }) {
    const pageRender = () => {
        switch (currentPage.name) {
            case "About":
              return <About />;
            case "Portfolio":
              return <Portfolio />;
            case "Contact":
              return <Contact />;
            case "Resume":
              return <Resume />;
            default:
              return <About />;
          }
    };
    return (
        <div>{pageRender(currentPage)}</div>
    );
}

export default Page;