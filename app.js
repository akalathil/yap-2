
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');
var teach_listing=require('./routes/teach_listing');
var user_profile=require('./routes/user_profile');
var message=require('./routes/message');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/home', index.view);
app.get('/teach_listing_education', teach_listing.education);
app.get('/teach_listing_fitness', teach_listing.fitness);
app.get('/teach_listing_music', teach_listing.music);
app.get('/teach_listing_culinary', teach_listing.culinary);
app.get('/teach_listing_beauty', teach_listing.beauty);
app.get('/teach_listing_search', teach_listing.search);
app.get('/', index.login);

app.get('/user_profile', user_profile.profile);
app.get('/message', message.messenger);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
