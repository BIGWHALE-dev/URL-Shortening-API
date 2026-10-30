import { useState } from "react";
import "./SearchBar.css";

function SearchBar(prop) {
  const [inputLink, setInputLink] = useState("");
  const [errMessage, setErrMessage] = useState("");

  async function requestHandler(e) {
    try {
      e.preventDefault();
      const urlPattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i", // fragment locator
      );

      if (!inputLink.trim()) {
        setErrMessage("Please add a link");
        return;
      }

      if (!urlPattern.test(inputLink.trim())) {
        setErrMessage("Enter a valid link");
        return;
      }

      const apiUrl =
        import.meta.env.VITE_API_URL || "http://localhost:3000/api";
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: inputLink.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || `Unable to shorten link, try again (${res.status})`,
        );
      }

      const shortenedResult = data.shorturl;
      if (typeof shortenedResult !== "string") {
        throw new Error(
          "The URL shortening service returned an invalid response.",
        );
      }

      prop.onReceiveShortLink({ inputLink, shortenedResult });
      setInputLink("");
    } catch (err) {
      setErrMessage(
        err instanceof Error
          ? err.message
          : "Unable to shorten link, please try again.",
      );
    }
  }

  return (
    <div className="search-bar_container">
      <form onSubmit={requestHandler}>
        <div className={`input-err__container ${errMessage ? "error" : ""}`}>
          <input
            type="search"
            placeholder="Shorten a link here..."
            name="search"
            id="search_bar"
            value={inputLink}
            onChange={(e) => {
              const link = e.target.value;
              setInputLink(link);
            }}
            onInput={() => setErrMessage("")}
          />
          <p className="error_msg">{errMessage}</p>
        </div>
        <input type="submit" className="search-btn" value="Shorten It!" />
      </form>
    </div>
  );
}

export default SearchBar;
// "https://corsproxy.io/?"
