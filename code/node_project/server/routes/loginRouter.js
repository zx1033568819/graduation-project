var express = require('express');
var router = express.Router();
var sqlQuery = require('../DBconfig');

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('登录模块');
});
router.get('/register', function(req, res, next) {
    res.send('注册模块');
  });

router.post('/register', async (req,res)=>{
    //获取username和密码
    let username = req.body.user_name;
    let password = req.body.user_password;
    let sex = req.body.sex;
    let birth = req.body.user_birth;
    let cellNumber = req.body.cell_number;
    let email = req.body.email;
    let sqlStr = "select * from user_information where user_name = ?";
    let result = await sqlQuery(sqlStr, [username]);
    if(result.length != 0){
      //用户名存在，注册失败
      res.status(403);
      res.send('注册失败');
    }else{
      //注册成功
      sqlStr = "insert into user_information (user_name,user_password,sex,user_birth,cell_number,email) values (?,?,?,?,?,?)";
      await sqlQuery(sqlStr,[username,password,sex,birth,cellNumber,email]);
      res.status(200);
      res.send("注册成功");
    }
})


//登录
router.post('/login', async(req,res)=>{
  let username = req.body.user_name;
  let password = req.body.user_password;
  let sqlStr = "select * from user_information where user_name=? and user_password = ?";
  let result = await sqlQuery(sqlStr, [username,password]);
  if(result.length == 0){
    res.status(400);
    res.send('登录失败');
  }else{
    res.status(200);
    res.send('登录成功');
  }
})
module.exports = router;