import React from "react";
import Review from "./Review";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header>
        <Navbar variant="dark" fixed="top" expand="lg">
          <Navbar.Brand>Review React App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Navbar>
      </header>
      <main className="main-container">
        <section className="quote_container">
          <div className="title">
            <h2>Our Reviews</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
    </>
  );
}

export default App;
