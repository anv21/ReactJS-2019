import express from 'express';
const app = express();

app.get('/api', (req, res) => {
  res.send(`PORT 3000`);
});

app.listen(3000, function() {
  console.log("App listening on port 3000!");
});