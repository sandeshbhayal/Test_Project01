var http = require('http');
var fs   = require('fs');

http.createServer(function(req , res){
    var content = 'Hello Sandesh Bhayal';
    fs.writeFile('abc1.html',content , function(err){
          if(err) throw err ; 
          console.log('File Write Successfully');
    });
    fs.open('abc1.html','a' , function(err , fd){
        if(err){ 
            throw err ;
        }else{
            fs.appendFile(fd,'<h1>Good Morning</h1>',function(err){
                if(err) throw err ; 
                console.log('Append Successfully'); 
                fs.close(fd , function(err){
                    if(err) throw err ;
                })
            });
        } 
    });

    fs.readFile('abc1.html' , function (err,data){
        if(err) throw err ; 
        res.writeHead(200 , {'Content-Type' : 'text/html'});
        res.write('Hello Sandesh '+data);
        res.end();    
    });    
}).listen(3000); 
console.log('Server Connected');