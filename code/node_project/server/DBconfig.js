/*
    封装操作数据库的通用api
*/
let mysql = require('mysql');

let options = {
        host: 'localhost', // 数据库所在的服务器的域名或者IP地址
        user: 'root', // 登录数据库的账号
        password: 'root', // 登录数据库的密码
        database: 'trading_web' // 数据库名称
    };
    // 建立连接
 let con = mysql.createConnection(options);

 con.connect((err)=>{
     if(err){
         console.log('err');
     }else{
         console.log('数据库连接成功');
     }
 });

 function sqlQuery(strSql,arr){
     return new Promise(function(resolve,reject){
         con.query(strSql,arr,(err,results)=>{
             if(err){
                 reject(err)
             }else{
                 resolve(results)
             }
         })
     })
 }

module.exports = sqlQuery;