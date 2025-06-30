const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());

// Serve static files from the React build
app.use(express.static(path.join(__dirname, "client/build")));

// API routes here

const db = new sqlite3.Database("./doctor.db", (err) => {
  if (err) return console.error("DB Connection Error:", err.message);
  console.log("✅ Connected to hospital.db");
});


// API: Get user by ID


app.get("/:id", (req, res) => {
  const id = req.params.id;
  const query = "SELECT name, role FROM staff_directory WHERE id = ?";

  db.get(query, [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: "User not found" });

    res.json(row); // { name: "...", role: "..." }
  });
});

// Catch-all route to serve React app
app.get("/React-project", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
