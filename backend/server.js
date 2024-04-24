const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // This is to handle Cross-Origin Resource Sharing (CORS)

const skillsRouter = require('./routes/skills'); // Assuming you have a separate file for skills routes.

app.use('/api/skills', skillsRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
