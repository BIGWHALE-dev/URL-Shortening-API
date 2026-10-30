import "./Hero.css";
import Container from "../UI/Container";

function Hero() {
  return (
    <section>
      <Container className="hero_container">
        <div className="hero_image">
          <img src="/images/illustration-working.svg" alt="Hero-Image" />
        </div>
        <div className="hero_text">
          <h1 className="hero_heading">More than just shorter links</h1>
          <p className="hero_description">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="button hero_btn">Get Started</button>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
