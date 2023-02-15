const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const homeData = require('./routes/home');
const usersRoutes = require('./routes/users');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use(homeData.router);
app.use(usersRoutes);

app.use((req, res, next) => {
    res.render('404', { pageTitle: 'Page Not Found' })
})

app.listen(3000);