const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const user = ['abdul', 'alam', 'jamal']

// get
app.get('/', (req, res) => {
    const chapabaj = {
        Tanvir:'01',
        Moulik:'02'
    }
    res.send(chapabaj)
});
app.get('/user/:id', (req, res) =>{
    const id = req.params.id;
    const name = user[id];
    res.send({id, name});
})

// post
app.post('/addUser', (req, res)=>{
    const user = req.body;
    user.id = 43;
    res.send(user);
})

app.listen(3000, () => console.log('Listening to port 3000'))