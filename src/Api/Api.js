const express = require('express');
const { request } = require('https');
const { response } = require('express');
const app = express();
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static('public'));
app.use(express.json());

app.post('/api', (request, response) => {
    console.log(request);
});
