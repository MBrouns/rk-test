import * as express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("It works!");
});
app.listen(8080, () => console.log("Server started ..."));
