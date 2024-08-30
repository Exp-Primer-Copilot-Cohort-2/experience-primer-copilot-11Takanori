// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments array
const comments = require('./comments');

// Respond with the json for all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Respond with the json for the comment with the corresponding id
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find((comment) => comment.id === parseInt(id));
    res.json(comment);
});

// Respond with the json for the comments with the corresponding postId
app.get('/posts/:postId/comments', (req, res) => {
    const postId = req.params.postId;
    const postComments = comments.filter((comment) => comment.postId === parseInt(postId));
    res.json(postComments);
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});