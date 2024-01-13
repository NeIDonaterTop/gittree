var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tree1');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tree = require('./routes/tree');

var app = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var sessionStore = MongoStore.create({
  mongoUrl: 'mongodb://localhost/tree1',
  mongooseConnection: mongoose.connection,
  // Дополнительные параметры, если необходимо
});

app.use(session({
  secret: "ThreeCats",
  cookie: { maxAge: 60 * 1000 },
  resave: true,
  saveUninitialized: true,
  store: sessionStore,
}));
app.use(function(req,res,next){
  req.session.counter = req.session.counter +1 || 1
  next()
  })
app.use(require("./middleware/createMenu.js"))
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tree', tree);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
