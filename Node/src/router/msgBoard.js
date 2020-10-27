const e = require('express');
const express = require('express');
const moment = require('moment-timezone');
const db = require('./../db_connect');
const router = express.Router();


const output = {
  page: 0,
  perPage: 10,
  totalRows: 0,
  totalPage: 0,
  rows: [],
  replyRows: [],
};


async function getMsgList(req) {
  
  const [[{ totalRows }]] = await db.query(
    'SELECT COUNT(1) totalRows FROM msgboard'
  );
  if (totalRows > 0) {
    let page = parseInt(req.query.page) || 1;
    output.totalRows = totalRows;
    output.totalPage = Math.ceil(totalRows / output.perPage);
    if (page < 1) {
      output.page = 1;
    } else if (page > output.totalPage) {
      output.page = output.totalPage;
    } else {
      output.page = page;
    }

    let sql = `SELECT * FROM msgboard ORDER BY sid DESC LIMIT ${
      (output.page - 1) * output.perPage
    },${output.perPage}`;

    let replyCmtSql = `SELECT * FROM msgboard  WHERE parnentId != 0`;

    const [result2] = await db.query(sql);
    const [result3] = await db.query(replyCmtSql);

    result2.forEach((element) => {
      element.postTime2 = moment(element.postTime).format('YYYY-MM-DD');
    });

     result3.forEach((element) => {
      element.postTime2 = moment(element.postTime).format('YYYY-MM-DD');
     });



    output.rows = result2;
    output.replyRows = result3;
    
  }
  if (output.rows.length !== 0) {
    // console.log(output.replyRows[0].sid);
    return output;
    
  } else {
   return '目前沒有留言';
  }
}


router.get('/', async (req, res) => {
  const output = await getMsgList(req);
  if (req.session.admin) {
    res.render('msgBoard.ejs', output);
  } else {
    res.render('msgBoard.ejs', output);
  }
});

router.get('/api', async (req, res) => {
  res.json(await getMsgList(req));
});

// //當 url 是 /post/:id 時, 取得某一筆資料
// app.get('/post/:id', function(req, res, next){
//   //取得 post.json 資料夾
//   res.locals.posts.forEach(function(post){
//     //從 url 取得 id 參數與 posts.json 裡的 id
//     if (req.params.id === post.id){
//       //顯示參數為  url 中 id 的 post.id, 那麼顯示部分資料
//       res.render('post.ejs', { post: post });
//     }
//   })
// });

// router.delete('/del/:sid', async (req, res) => {
//   const sql = 'DELETE FROM `address_book` WHERE sid=?';
//   const [results] = await db.query(sql, [req.params.sid]);

//   res.json(results);
// });
router.get('/api/relpy', async (req, res) => {
  const replyCmtSql = `SELECT * FROM msgboard  WHERE parnentId != 0`;
  const [replyCmt] = await db.query(replyCmtSql);
  replyCmt.forEach((sid)=>{
    // output.sid === replyCmt.parnentId;
    if (output.sid === replyCmt.parnentId) return;
  }) 

   res.json(replyCmt);



  // res.render('msgBoard.ejs', outputRelpy);
});

module.exports = router;

/* RESTful API
    列表
    /api/ GET
    新增
    /api/ POST
    呈現單筆
    /api/:sid GET
    修改單筆
    /api/:sid PUT
    刪除單筆
    /api/:sid DELETE
 */
/*
    列表  /list
        列表呈現 GET
    新增  /add
        表單呈現 GET, 接收資料 POST
    修改  /edit/:sid
        修改的表單呈現 GET, 接收資料 POST
    修改  /del/:sid
        POST
 */

/* RESTful API
    列表
    /api/ GET
    新增
    /api/ POST
    呈現單筆
    /api/:sid GET
    修改單筆
    /api/:sid PUT
    刪除單筆
    /api/:sid DELETE
 */
/*
    列表  /list
        列表呈現 GET
    新增  /add
        表單呈現 GET, 接收資料 POST
    修改  /edit/:sid
        修改的表單呈現 GET, 接收資料 POST
    修改  /del/:sid
        POST
 */
