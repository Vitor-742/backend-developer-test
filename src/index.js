import 'dotenv/config'

import { app } from './api.js'

const port = 3000;

app.get('/', (req, res) => {
  res.send();
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})