import React from "react";
import About from "./About";
import Project from "./Project";

function Page ({ currentPage }) {
    const pageRender = () => {
        switch (currentPage.name) {
            case 'About':
                return <About />;
            case 'Project':
                return <Project />;
            default:
                return <About />;
        }
    };
    return (
        <div>{pageRender(currentPage)}</div>
    );
}

export default Page;