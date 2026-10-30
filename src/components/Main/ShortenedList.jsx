import { useState } from "react";
import "./ShortenedList.css";

function ShortenList(prop) {
  const [btnIndex, setIndex] = useState(null);

  function copyBtnHandler(index, textToCopy) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIndex(index);

        setTimeout(() => {
          setIndex(null);
        }, 3000);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div className="lists__container">
      {prop.data.map((data, i) => {
        return (
          <li className="shortenedList" key={data.id}>
            <p className="enteredLink">{data.inputLink}</p>

            <hr className="list-hr" />

            <div className="shortList__copyBtn-div">
              <p className="shortenedLink">{data.shortenedResult}</p>
              <button
                className="linkCopyButton"
                type="button"
                onClick={() => copyBtnHandler(i, data.shortenedResult)}
                style={{
                  backgroundColor: btnIndex === i ? "hsl(257, 27%, 26%)" : "",
                }}
                disabled={btnIndex === i}
              >
                {btnIndex === i ? "Copied!" : "Copy"}
              </button>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default ShortenList;
