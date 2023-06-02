import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";

// Used guidance from module 19 exercise #10-Stu_Component & #26-Stu_Testing
function App() {
  const [menuItem] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);
  const [currentPage, setCurrentPage] = useState(menuItem[0]);
  const [pageSelected, setPageSelected] = useState(false);

  // returns the sections above and splits the UI section
  return (
    <div>
      <Header
        menuItem={menuItem}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}/>
      <section class="hero">
        <div class="hero-name">
          <p>Jonathan Borroel</p>
        </div>
      </section>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
