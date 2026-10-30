import "./HeaderList.css";

function HeaderLists(prop) {
  return (
    <div className={`${prop.isOpen ? "open" : ""} links_btn-container`}>
      <ul className="link_lists">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>

      <hr className="mobile-nav_hr" />

      <div className="button_container">
        <button className="transparent_btn">Login</button>
        <button className="button signup_btn">Sign Up</button>
      </div>
    </div>
  );
}

export default HeaderLists;
