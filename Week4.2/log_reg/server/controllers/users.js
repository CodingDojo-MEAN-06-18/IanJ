const mongoose = require('mongoose');
const User = mongoose.model('User')
const express = require('express');
const app = express();
const bCrypt = require('bcrypt');
const session = require("express-session")
const flash = require('express-flash');

app.use(flash());

app.use(session({
    secret: 'mypassword',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}));

module.exports = {
    
    index(req, res) {
       	if(req.session.userID){
    		res.redirect('/users');
  		} else {
    		res.render("index");
   		}
    },

    get_users: function(req,res){
       		User.findOne({email:req.session.email},function(err,user){
                if(err){
                    console.log(err);
                    res.redirect('/')
                } else {
                    res.render('users', {user:user})
                }
            })
    },

    post_newuser: function(req, res) {
        User.create(req.body)
            .then(user => {
                req.session.userID = user.id
                res.redirect('/');
            })
            .catch(error => {
                console.log("Error: ", error);
                res.redirect('/');
            })
	},

	login_user: function(req,res) {
   	 	User.findOne({ email: req.body.email })
            .then( userInfo => {
       		   if (!userInfo) {
            	   throw new Error();
                }
            	return User.validatePassword(req.body.password, userInfo.password)
                    .then( ()=> {
                        req.session.userID = userInfo.id
                    })

        	})
            .catch( error => {
                redirect('/');
            })
    },
	logout_user: function(req,res) {
    	req.session.destroy();
    	res.redirect('/');
	},

}