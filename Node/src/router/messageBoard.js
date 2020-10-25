const //下载express  npm i express -S
const express = require('express')
const app = express()
const port = 3000

const router = express.Router();

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server running at  http://127.0.0.1:${port}`))



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
