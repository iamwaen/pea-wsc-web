import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import './App.css';
import './assets/styles/mainStyle.css';
import Logo from './assets/img/svg/blob.svg';

function App() {
  return (
    <div>
      {/* <header>
        <h1>Welcome to React Router!</h1>
      </header> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>

          <nav className='navbar navbar-expand-lg center-nav navbar-light navbar-bg-light'>
            <div className='container flex-lg-row flex-nowrap align-items-center'>
              <div className='navbar-brand'>
                <h3>PEA WSC</h3>
              </div>
              <div className='navbar-collapse offcanvas offcanvas-nav offcanvas-start'>
                <div className='offcanvas-header d-lg-none'>
                  <a href="./index.html"><img src="./assets/img/logo-light.png" srcset="./assets/img/logo-light@2x.png 2x" alt="" /></a>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className='offcanvas-body ms-lg-auto d-flex flex-column h-100'>
                  <ul className='navbar-nav'>
                    <li className='nav-item'>1</li>
                    <li className='nav-item'>2</li>
                  </ul>
                </div>
              </div>
            </div>
          </nav> 

    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
