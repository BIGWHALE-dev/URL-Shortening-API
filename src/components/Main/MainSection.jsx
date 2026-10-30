import { useEffect, useState } from "react";
import Container from "../UI/Container";
import "./MainSection.css";
import SearchBar from "./SearchBar";
import ShortenList from "./ShortenedList";
import StatCards from "./StatCard";

function MainSection() {
  const [storedLinks, setStoredLinks] = useState(
    () => JSON.parse(localStorage.getItem("myShortenedLinks")) || [],
  );

  function linksData(data) {
    const link = { ...data, id: crypto.randomUUID() };
    setStoredLinks((prev) => [link, ...prev]);
  }

  useEffect(() => {
    localStorage.setItem("myShortenedLinks", JSON.stringify(storedLinks));
  }, [storedLinks]);

  return (
    <section className="main-section">
      <Container className="main-section_container">
        <SearchBar onReceiveShortLink={linksData} />
        <ShortenList data={storedLinks} />
        <div className="section-intro__container">
          <h2>Advanced Statistics</h2>
          <p className="subtitle">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <StatCards />
      </Container>
    </section>
  );
}

export default MainSection;
