const express = require('express');
var app = express();
/*loading in handlebars */
var hbs = require('hbs');

/*to render dynamic data in html 
procedure use one line code down below,create views/partials/filename.hbs and use {{> filename}}  in server.js */
hbs.registerPartials(__dirname + '/views/partials');


hbs.registerHelper('getCurrentYear',()=>{
    return  new Date().getFullYear()
});

hbs.registerHelper('getMessage',(text)=>{
    return  text.toUpperCase();
});
/*app.set('key','value'); key-u wanna set, value-which want to use */
app.set('view engine', 'hbs');
/*create view folder because view is a default dir which express uses for creating templates */

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'HomePage',
        message: 'welcome to the website',
        // currentyear: new Date().getFullYear()
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        message: 'welcome to the website',
        // currentyear: new Date().getFullYear()
    })
})

app.listen(3000, () => {
    console.log("server is up on 3000")
});