const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');
const cors = require('cors');


const app = express();

//middleware

app.use(express.json())
app.use(cors);

commentsBypostId = {};


app.get('posts/:id/comments',(req,res)=>{

    return res.send(commentsBypostId[req.params.id]);
});

app.post('posts/:id/comments',(req,res)=>{

    const {content} = req.body;
    console.log("content of comment for the post is",content);

    const comments = commentsBypostId[req.params.id] || [];

    const commentId = randomBytes(4).toString('hex');

    comments.push({id:commentId,content});

    const postId = req.params.id;

    commentsBypostId[postId] = comments;

    return res.status(201).send(commentsBypostId[postId]);

    

});

app.listen(4000,()=>{

    console.log("Comments Server listening on port no 4000");
});