import "./Container.css";

function Container(prop) {
  const classes = `container ${prop.className || ""}`;
  return <div className={classes}>{prop.children}</div>;
}

export default Container;
