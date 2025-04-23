import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Use the PORT environment variable, defaulting to 3000
const PORT = process.env.PORT || 3000;

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, "dist")));

// Serve index.html for all routes (for client-side routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});