console.log('starting server');
// ceate the express server on port 3000 and listen it using route
const express = require('express');
const app = express();
const port = 3000;
//  lets refrence to the static files
app.use(express.static('public'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// create the route for the root path
app.get('/', (req, res) => res.send('Hello World!'));