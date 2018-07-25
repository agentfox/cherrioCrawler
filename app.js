var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/trang4', function(req, res){

    let url = 'http://www.thaiwater.net/DATA/REPORT/php/lampao_scada/lampao_scada.php?lang=en';
    
    request(url, function(error, response, html){
      
        if(!error){
            let $ = cheerio.load(html);
            let date = [];
            let time = [];
            let  rainfall=[];
            let waterlevel = [];
            let flowrates = [];
            let left = [];
            let right = [];
            let json = []; 
            
                    
            // Ten Heading cua trang
           /*  $('body > table >tbody .style_big_red ').filter(function(){
                
                let data = $(this);
                page = data.first().first().text();
                console.log("abc");
                console.log(page);
               })
            //Ten cua cac bang
            $('body > table >tbody .style  ').filter(function(){
                
                let data = $(this);
                let name = data.first().first().text().trim();
                
                arrname.push(name);
                console.log(arrname);            }) */

             $("body > table > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(2), body > table > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(2)").filter(function(){

                let data = $(this);
                let lastestdt = data.text().trim();
                let d = lastestdt.slice(0,17).trim();
                let t = lastestdt.slice(lastestdt.length-5,lastestdt.length).trim();
                date.push(d);
                time.push(t);                   
            }) 

            $("body > table > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(3) > td:nth-child(2), body > table > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(2)").filter(function(){

                let data = $(this);
                let rf = data.text().trim();
                rainfall.push(rf);                    
            }) 

            $("body > table > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(4) > td:nth-child(2), body > table > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr:nth-child(4) > td:nth-child(2)").filter(function(){

                let data = $(this);
                let wl = data.text().trim();
                waterlevel.push(wl);                    
            }) 

            $("body > table > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(5) > td:nth-child(2), body > table > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr:nth-child(5) > td:nth-child(2)").filter(function(){

                let data = $(this);
                let flr = data.text().trim();
                flowrates.push(flr);                    
            })

            $("body > table > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(6) > td:nth-child(3), body > table > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr:nth-child(6) > td:nth-child(3)").filter(function(){

                let data = $(this);
                let l = data.text().trim();
                left.push(l);                    
            })

            $("body > table > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(6) > td:nth-child(5), body > table > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr:nth-child(6) > td:nth-child(5)").filter(function(){

                let data = $(this);
                let r = data.text().trim();
                right.push(r);                    
            })            
            waterlevel.splice(2, 0, " ", " ");
            flowrates.splice(2, 0, " ", " ");
            left.splice(2, 0, " ", " ");
            right.splice(2, 0, " ", " ");
            
            for(let i=0 ; i<9 ; i++){
                let all = {
                    date : date[i],
                    time : time[i],
                    waterlevel : waterlevel[i],
                    flowrates : flowrates[i],
                    left : left[i],
                    right : right[i],
                }
                json.push(all);
            }
            console.log(json);
            

            res.json({ data : json });
        }
    })
})


app.get('/trang18', function(req, res){

    let url = 'http://www.thaiwater.net/DATA/REPORT/php/chanthaburi_scada/chanthaburi_scada.php?lang=en';
    
    
    request(url, function(error, response, html){
    if(!error){
        let $ = cheerio.load(html);

            let date = [];
            let time = [];
            let rainfall = [];
            let gageheight = [];
            let streamflowrate = [];
            let left = [];
            let right = [];
            let json = [];

        $("#table_main > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(2),#table_main > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(2)").filter(function(){

            let data = $(this);
            let lastestdt = data.text().trim();
            let d = lastestdt.slice(0,17).trim();
            let t = lastestdt.slice(lastestdt.length-5,lastestdt.length).trim();
            date.push(d);
            time.push(t);                   
        })

        $('#table_main > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(3) > td:nth-child(2) > strong, #table_main > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(2) > strong  ').filter(function(){
                
            let data = $(this);
            let rf = data.text().trim();          
            rainfall.push(rf);            
        }) 

        $('#table_main > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(4) > td:nth-child(2) > strong, #table_main > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr:nth-child(4) > td:nth-child(2) > strong').filter(function(){
                
            let data = $(this);
            let gh = data.text().trim();          
            gageheight.push(gh);            
        }) 

        $('#table_main > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(5) > td:nth-child(2) > strong, #table_main > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr:nth-child(5) > td:nth-child(2) > strong').filter(function(){
                
            let data = $(this);
            let sfr = data.text().trim();          
            streamflowrate.push(sfr);            
        })

        $('#table_main > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr.style_r_bank > td:nth-child(3) > strong,#table_main > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr.style_r_bank > td:nth-child(3) > strong').filter(function(){
                
            let data = $(this);
            let l = data.text().trim();          
            left.push(l);            
        })

        $('#table_main > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr.style_r_bank > td:nth-child(5) > strong,#table_main > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr.style_r_bank > td:nth-child(5) > strong').filter(function(){
                
            let data = $(this);
            let r = data.text().trim();          
            right.push(r);            
        })

        gageheight.splice(0,0,"");
        gageheight.splice(5,0,"");
        gageheight.splice(9,0,"");
        streamflowrate.splice(0,0,"");
        streamflowrate.splice(5,0,"");
        streamflowrate.splice(9,0,"");
        left.splice(0,0,"");
        left.splice(5,0,"");
        left.splice(9,0,"");
        right.splice(0,0,"");
        right.splice(5,0,"");
        right.splice(9,0,"");

        for(let i=0 ; i<=10 ; i++){
            let all = {
                date : date[i],
                time : time[i],
                rainfall : rainfall[i],
                gageheight : gageheight[i],
                streamflowrate : streamflowrate[i],
                left : left[i],
                right : right[i],
            }
            json.push(all);
        }

        console.log(json); // #table_main > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(3) > td:nth-child(2) > strong
        //
            //
        res.json(json)
        
        }    
    })      
})









































app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;