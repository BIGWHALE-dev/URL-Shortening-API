const express = require("express");

const app = express();
const allowedOrigin = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

app.use((req, res, next) => {
  const origin = req.get("Origin");

  if (origin === allowedOrigin) {
    res.set("Access-Control-Allow-Origin", origin);
    res.set("Vary", "Origin");
  }

  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json());

app.post("/api", async (req, res) => {
  const url = req.body?.url;

  if (typeof url !== "string" || !url.trim()) {
    return res.status(400).json({ error: "Please provide a URL." });
  }

  try {
    const response = await fetch(
      `https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`,
      {
        method: "POST",
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(502).json({
        error: data.error || "The URL shortening service rejected the request.",
      });
    }

    return res.json(data);
  } catch (error) {
    console.error("URL shortening service request failed:", error);
    return res
      .status(502)
      .json({ error: "Unable to reach the URL shortening service." });
  }
});

const port = Number(process.env.PORT || 3000);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be a valid TCP port.");
}

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
