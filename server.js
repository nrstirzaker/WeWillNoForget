const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 3000

app.use('/static', express.static('client/public'))
app.use(cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})