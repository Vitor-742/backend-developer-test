import 'dotenv/config'

import { app } from './api.js'

import updateS3 from './utils/updateS3.js'

const port = 3000;

app.get('/', (req, res) => {
  res.send();
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})

// Atualiza bucket de S3 assim que inicia a aplicacao, simulando evento do EventBridge
updateS3();