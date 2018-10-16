const express = require('express');
const app = express();
/*loading in handlebars */
const hbs = require('hbs');

const port = process.env.port || 3300;
/*to render dynamic data in html 
procedure use one line code down below,create views/partials/filename.hbs and use {{> filename}}  in server.js */
hbs.registerPartials(__dirname + '/views/partials');


hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('getMessage', (text) => {
    return text.toUpperCase();
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
        message: 'welcome to the About website',
        // currentyear: new Date().getFullYear()
    })
});

app.get('/projects',(req,res)=>{
res.render('projects.hbs',{
    pageTitle:'newAbout',
    message:'Welcome to new website'
})
})

app.listen(port, () => {
    console.log(`server is up on ${port}`)
});