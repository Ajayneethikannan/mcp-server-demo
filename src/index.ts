import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  const headers = req.headers;
  console.log(headers);
  res.send("The headers are: " + JSON.stringify(headers));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
