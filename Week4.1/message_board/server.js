const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;

mongoose.connect('mongodb://localhost/animal');
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

app.set('views', path.resolve('views'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './static')));

app.use(flash());

app.use(session({
    secret: 'secretpassword',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}));

const CommentSchema = new mongoose.Schema({
    name: { type: String, required: true},
    content: { type: String, required: true},
    },
    { timestamps: true });


const postSchema = new mongoose.Schema({
    name: { type: String, required: true},
    content: { type: String, required: true},
    comments: [CommentSchema],
    },
    { timestamps: true });

mongoose.model('post', postSchema);
mongoose.model('comment', CommentSchema);

const Post = mongoose.model('post');
const Comment = mongoose.model('comment');

app.get('/', function(_req, res) { 
    Post.find({}).then((posts) => {
        res.render("index", {posts: posts});
    }).catch((error) => {
        console.log("error: ", error);
    });
});


app.post('/messages/new', (req,res) => {
console.log("POST DATA", req.body);
    Post.create(req.body)
        .then((post) => {
            console.log('message', post);
            res.redirect('/');
        })
         .catch((error)=>{
            console.log("Error: ", error);
            for (let key in error.errors){
                req.flash('messages', err.errors[key].message)
            }
            res.redirect('/');
         });
        
});


app.post('/messages/:id/comments/new', (req, res) => {
    Comment.create(req.body)
        .then((comment) => {
            Post.findById(req.params.id)
            .then((post) => {
                post.comments.push(comment);
                post.save()
                .then(() => {
                    res.redirect("/");
                });
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
        }).catch((error) => {
            console.log("Error: ", error);
            for (let key in error.errors) {
                req.flash('comments', err.errors[key].message)
            }
            res.redirect("/");
            });
});


app.listen(port, () => console.log(`Express server listening on port ${port}`));