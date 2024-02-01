const http = require('http');
const port = 3000;
const express = require('express');
const app = express();

let users = [
    'Amir', 'Mohammad', 'Sarah', 'John', 'James', 'Asghar',
]

app.get('/get', (res, req) => {

    const id = res.query.id;
    if (id !== undefined) {
        req.writeHead(200, { 'contentType': 'text/plain' });
        req.end("the user is: " + users[id] + "\nBye there!\n");
    }
    else {
        req.writeHead(200, { 'contentType': 'application/json' });
        req.end(JSON.stringify(users));
    }
})

app.listen(port, () => {

})

/*
    simply use this command in your terminal:
    > curl -v http://localhost:3000/get
    OR
    > curl -v http://localhost:3000/get?id=<ID_FROM_0_TO_5>
*/