// to run: node server/server.js
// to close: control + C

const express = require('express');

const app = express();
const port = 5001;

app.use(express.static('server/public'));

const quoteList = require('./modules/quoteList');

app.listen(port, () => {
    console.log('listening on port, ', port);
});

// /route req = request res = respense 
app.get('/quotes', function(req, res){
    console.log("request for /quotes was made");
    res.send(quoteList);
});

    // GET: retrieve data from the server
    // POST: save new data to the server
    // PUT: update some data on the server
    // DELETE: delete some data on the server


