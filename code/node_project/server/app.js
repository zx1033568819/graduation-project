var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//引入上传模块
let multer = require('multer');
//配置上传对象
let upload = multer({dest:"./public/upload"});
//配置跨域
var cors=require('cors');
//配置taken
var JWT = require('express-jwt');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/apiRouter');
var loginRouter = require('./routes/loginRouter');
var adminLoginRouter = require('./routes/adminLoginRouter');

var app = express();

//设置跨域访问
app.use(cors({
  origin:['http://localhost:8080'],  //指定接收的地址
  methods:['GET','POST'],  //指定接收的请求类型
  alloweHeaders:['Content-Type','Authorization']  //指定header
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//系统API路由
app.use('/api', apiRouter);
//登录注册
app.use('/loginRouter', loginRouter);
//管理员登录注册
app.use('/adminLoginRouter', adminLoginRouter);
//jwt配置
app.use(JWT({
  secret:'secret12345'
}).unless({
  path:['/loginRouter','adminLoginRouter']
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
