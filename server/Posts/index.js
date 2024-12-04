const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');
const cors = require('cors');

const app = express();


//Middlewares

app.use(express.json());
app.use(cors());

posts = {}



//routes
app.get('/posts',(req,res)=>{

    return res.send(posts);
});

app.post('/posts',(req,res)=>{

    const {title} = req.body;

    const id = randomBytes(4).toString('hex');

    posts[id]={

        id,title


    }

    return res.status(201).send(posts[id]);
});


app.listen(4000,()=>{

    console.log("server listening on port no 4000");
});