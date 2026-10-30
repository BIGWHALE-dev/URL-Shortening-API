import "./Header.css";
import Container from "../UI/Container";
import HeaderLists from "./HeaderList";
import Hero from "./Hero";
import { useState } from "react";
import ReactDOM from "react-dom";

function Backdrop(prop) {
  return (
    prop.isOpen && <div className={prop.className} onClick={prop.onClick}></div>
  );
}

function Header() {
  const [isVisible, setVisibility] = useState(false);

  const openModal = () => setVisibility(true);
  const closeModal = () => setVisibility(false);

  return (
    <header>
      {ReactDOM.createPortal(
        <Backdrop
          className="backdrop"
          onClick={closeModal}
          isOpen={isVisible}
        />,
        document.getElementById("backdrop")
      )}

      <Container className="header_container">
        <div className="header_logo">
          <img src="/images/logo.svg" alt="logo" />
        </div>

        <HeaderLists isOpen={isVisible} />

        <div
          className="bar_container"
          onClick={isVisible ? closeModal : openModal}
        >
          <img src="/images/hamburger-menu.svg" alt="Menu-Bar" />
        </div>
      </Container>
      <Hero />
    </header>
  );
}

export default Header;
