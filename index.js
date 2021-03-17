const bodyParser = require('body-parser');
const express = require('express');
const got = require('got')
const fetch = require('node-fetch');

const PORT = process.env.PORT || 5000;

const headers = {
    // 'accept-language' : 'en\r\n',
    'x-requested-with': 'XMLHttpRequest',
    'user-agent': 'Mozilla/5.0'
}

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/cors', async (req, res) => {
    const url = req.query.url;
    console.log('url', url)
    const response = await got(url, { headers })
    v9res = JSON.parse(response.body)
    res.send(v9res)
})

app.listen(PORT, ()=>{
    console.log(`Port is running at ${PORT}`)
})