const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');



// Server will use port 3001.
const PORT = process.env.PORT || 3001;
// Yes, the app uses express.
const app = express();



app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
