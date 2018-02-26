var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
    'article-one'   :{
        title: 'article-one | Sam',
        heading: 'Article one',
        content:`<p>
                This is article one. Test test test Test test test Test test test Test test test Test test test Test test test Test test test Test test test Test test test Test test test Test test test Test test test Test test test Test test test Test test test Test test test Test test test Test test test Test test test Test test test Test test test Test test test Test test test Test test test Test test test 
                </p> `,
    },
    'article-two'   :{
        title: 'Article-two | Sam',
        heading: 'Article two',
        content:`<p>
                This is article Two. 
                </p> `,
    },
    'article-three' :{
        title: 'Article-three | Sam',
        heading: 'Article three',
        content:`<p>
                This is article three.
                </p> `,
    },
};


function createTemplate(data){

    var title=data.title;
    var heading=data.heading;
    var content=data.content;

    var htmlTemplate = `
         <!DOCTYPE html>
            <head>
            <title>
                ${title}
            </title>
           <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                    <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${content}
                    </div>
                </div>
            </body>
        </html>
    
    
    `;
    return htmlTemplate;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.parans.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/article-two',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
