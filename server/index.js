import express from 'express';
const app = express();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.listen(8080, function() {
  console.log("App listening on port 8080!");
});