import React, {useState} from 'react';
import './App.css';
import Footer from './components/Footer';
import Page from './components/Page';
import Main from './components/Main';

function App() {
  const [pages] = useState([
    { name: 'About Me'},
    { name: 'Portfolio'},
    { name: 'Contact'},
    { name: 'Resume'},
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [pageSelected, setPageSelected] = useState(false);

  return (
    <div>
      <Main pages={pages} 
    setCurrentPage={setCurrentPage}
    currentPage={currentPage}
    pageSelected={pageSelected}
    setPageSelected={setPageSelected}/>
    <section className="hero">
        <div className="hero-name">
          <p>Jonathan Borroel</p>
        </div>
      </section>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
