import "./StatCard.css";

function StatCards() {
  return (
    <div className="card_container">
      <div className="card">
        <div className="card-img__container">
          <img
            src="/images/icon-brand-recognition.svg"
            alt="Brand Recognition"
          />
        </div>
        <h3 className="card_heading">Brand Recognition</h3>
        <p className="card_description">
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </div>

      <div className="stick"></div>

      <div className="card">
        <div className="card-img__container">
          <img src="/images/icon-detailed-records.svg" alt="Detailed Records" />
        </div>
        <h3 className="card_heading">Detailed Records</h3>
        <p className="card_description">
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </div>

      <div className="stick"></div>

      <div className="card">
        <div className="card-img__container">
          <img
            src="/images/icon-fully-customizable.svg"
            alt="Fully Customizable"
          />
        </div>
        <h3 className="card_heading">Fully Customizable</h3>
        <p className="card_description">
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
    </div>
  );
}

export default StatCards;
