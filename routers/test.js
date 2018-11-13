var express = require("express");
var router = express.Router();

// router.get('/',function(req,res,next){
//     res.json({data:'hello world!'});
// });




// 获取所有的数据
router.get('/',(req,res) => {
    // 定义SQL语句
    const sqlStr = 'select * from text where isdel=0'
    conn.query(sqlStr,(err,results) => {
        console.log(results)
        if(err) {
            console.log('获取失败')
            return res.json({err_code:1,message:'获取失败',affectedRows:0});
    }
        res.json({
            err_code:0,message:results,affectedRows:0
        })
    })
})
module.exports = router;