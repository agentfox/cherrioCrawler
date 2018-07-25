var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/scrape', function(req, res){

    let url = 'http://www.thaiwater.net/DATA/REPORT/php/lampao_scada/lampao_scada.php?lang=';
    
    request(url, function(error, response, html){
      
        if(!error){
            var $ = cheerio.load(html);

            var  latestdata, rainfall,waterlevel,flowrates ,left,right    ;
            var page;
            var arrname =[];
            var value = [];
                    

           /*  $('body > table >tbody .style_big_red ').filter(function(){
                
                let data = $(this);
                page = data.first().first().text();
                console.log("abc");
                console.log(page);
   
                // Once again, once we have the data extract it we'll save it to our json object 
            })

            $('body > table >tbody .style  ').filter(function(){
                
                let data = $(this);
                let name = data.first().first().text().trim();
                
                arrname.push(name);
                console.log(arrname);
                // Once again, once we have the data extract it we'll save it to our json object 
            }) */

            $("[bgcolor^='#999999']").filter(function(){
                
                let data = $(this);
                latestdata = 
                console.log("abc");
                
                // Once again, once we have the data extract it we'll save it to our json object 
            }) 


            res.render('index',{title : "Agent Fox",data : json});
        }
    })
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;