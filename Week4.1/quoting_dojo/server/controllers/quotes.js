const Quote = require("../models/quote_models.js");

module.exports = {
    
    index: function(req, res) {
        res.render("index");
    },

    get_quotes: function(req,res){
        
        Quote.find({}, function(err,quotes){
            if(err){
                console.log("no quotes")
                res.redirect('/')
            } else {
                res.render("quotes", {quotes: quotes});
            }
        });
    },

    post_quote: function(req, res) {
        const quote = new Quote(req.body);
        quote.save(function(err) {
            if (err) {
                for (let key in err.errors) {
                    req.flash('quote', err.errors[key].message)
                }
                res.redirect('/');
            } else {
                req.flash('success', 'Quote was successfully added');
                res.redirect('/quotes');
            }
        });
    }
}