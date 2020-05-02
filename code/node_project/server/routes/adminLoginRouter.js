var express = require('express');
var router = express.Router();
var sqlQuery = require('../DBconfig');
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/adminLogin', function(req, res, next) {
  res.send('管理员登录模块');
});
router.get('/adminRegister', function(req, res, next) {
    res.send('管理员注册模块');
  });

router.post('/adminRegister', async (req,res)=>{
    //获取username和密码
    let adminname = req.body.admin_name;
    let password = req.body.password;
    let sqlStr = "select * from admin_information where admin_name = ?";
    let result = await sqlQuery(sqlStr, [adminname]);
    if(result.length != 0){
      //用户名存在，注册失败
      res.status(403);
      res.send('注册失败');
    }else{
      //注册成功
      sqlStr = "insert into admin_information (admin_name,admin_password) values (?,?)";
      await sqlQuery(sqlStr,[adminname,password]);
      res.status(200);
      res.send("注册成功");
    }
})


//登录
router.post('/adminLogin', async(req,res)=>{
  let adminname = req.body.admin_name;
  let password = req.body.password;
  let sqlStr = "select * from admin_information where admin_name=? and admin_password = ?";
  let result = await sqlQuery(sqlStr, [adminname,password]);
  if(result.length == 0){
    res.status(400);
    res.send('登录失败');
  }else{
    let token = jwt.sign(
      {
        adminname: adminname
      },
      'secret12345',
      {
        expiresIn: 3600 * 24 * 3
      });
      var data = {
        "message": "登录成功",
        "token": token
      };
      res.status(200).send(data);
    }
  })
module.exports = router;