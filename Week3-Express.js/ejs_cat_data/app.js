var express = require('./node_modules/express');

var app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

app.get('/my_cats', function(request, response) {
    response.render('my_cats');
});
app.get('/annabelle', function(request, response) {
    cat = {
        name: "Annabelle",
        url: "/images/cat1.jpeg",
        food: "Tuna",
        age: 3,
        toys: ["String", "Feathers", "Balls"],
    }
    response.render('cat_details', {cat: cat});
});
app.get('/blaze', function(request, response) {
    cat = {
        name: "Blaze",
        url: "/images/cat2.jpeg",
        food: "milk",
        age: 10,
        toys: ["Feet", "Boxes", "Coins"],
    }
    response.render('cat_details', {cat: cat});
});
app.get('/cinnamon', function(request, response) {
    cat = {
        name: "Cinnamon",
        url: "/images/cat4.jpeg",
        food: "Chicken",
        age: 6,
        toys: ["Lasers", "Birds", "Sticks"],
    }
    response.render('cat_details', {cat: cat});
});


app.listen(8000, function() {
    console.log("Running in localhost at port 8000");
});