const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/submit", (req, res) => {
  const { orderDate, returnDate } = req.body;

  const diff =
    (new Date(returnDate) - new Date(orderDate)) / (1000 * 60 * 60 * 24);

  if (diff > 7) {
    return res.json({
      success: false,
      message: "Error: Return period expired."
    });
  }

  let data = [];
  if (fs.existsSync("returns.json")) {
    data = JSON.parse(fs.readFileSync("returns.json"));
  }

  data.push(req.body);
  fs.writeFileSync("returns.json", JSON.stringify(data, null, 2));

  res.json({
    success: true,
    message: "Return Request Submitted Successfully."
  });
});

app.listen(3000, () =>
  console.log("Running at http://localhost:3000")
);
