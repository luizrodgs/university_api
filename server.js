const app = require('./src/app.js');

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
