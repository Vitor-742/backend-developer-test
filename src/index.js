require("dotenv").config();

const app = require('./api');
const port = 3000;

app.get('/', (req, res) => {
  res.send();
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})