const express = require('express');
const moment = require('moment-timezone');
const db = require('./../db_connect');
const router = express.Router();

async function getMsgList(req) {
  const output = {
    page: 0,
    perPage: 10,
    totalRows: 0,
    totalPage: 0,
    rows: [],
    replyRows:[],
  };

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
    return output;
  } else {
   return '目前沒有留言';
  }
}

router.get('/api', async (req, res) => {
  res.json(await getMsgList(req));
});

router.get('/', async (req, res) => {
  const output = await getMsgList(req);
  if (req.session.admin) {
    res.render('msgBoard.ejs', output);
  } else {
    res.render('msgBoard.ejs', output);
  }
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
