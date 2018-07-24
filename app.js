var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/scrape', function(req, res){

    let url = 'http://www.imdb.com/title/tt1229340/';
    
    request(url, function(error, response, html){
      
        if(!error){
            var $ = cheerio.load(html);

            var title, release, rating;
            var json = { title : "", release : "", rating : ""};

                  $('.title_wrapper').filter(function(){
                      let data = $(this);
                      title = data.children().first().text();
                      json.title = title;
                      // Once again, once we have the data extract it we'll save it to our json object 
                  })
                  
                  $('.subtext').filter(function(){
                    let data = $(this);
                      release = data.children().last().text();
                      json.release = release;
                  })

                  $('.ratingValue').filter(function(){
                    let data = $(this);
                      rating = data.children().first().text();
                      json.rating = rating;
                  })



            console.log(json);
            res.render('index',{title : "Agent Fox",data : json});
        }
    })
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;