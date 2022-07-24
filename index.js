const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
const errorData = require('./controller/404');

const successData = require('./routes/success');
const contactData = require('./routes/contactus');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(contactData)
app.use(successData)
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use(errorData.geterror);

app.listen(8000);
