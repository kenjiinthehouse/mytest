require("dotenv").config();
//
const express = require("express");
// 09/25早上
const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const upload = multer({ dest: __dirname + "/../tmp_uploads" });
const moment = require("moment-timezone");
// --------
// cors跨來源
const cors = require("cors");
//// 和SQL互動
const session = require("express-session");
const MysqlStore = require("express-mysql-session")(session);
const db = require("./db_connect");
const sessionStore = new MysqlStore({}, db);
//////
const app = express();

// app.get("/", function (req, res) {
//   res.send("Hello World2");
// });

//引入樣板引擎 EJS
app.set("view engine", "ejs");
//top middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// CORS 跨來源
const corsOptions = {
  credentials: true,
  origin: function (origin, cb) {
    console.log(`origin: ${origin}`);
    cb(null, true);
  },
};
app.use(cors(corsOptions));

// app.use(cors());
// app.use session 模組化管理
app.use(
  session({
    saveUninitialized: false, //官方建議設定
    resave: false, //官方建議設定
    secret: "hanzawa", //官方建議設定
    store: sessionStore,
    cookie: {
      maxAge: 1200000, //session存活秒數,單位毫秒
    },
  })
);
app.use((req, res, next) => {
  res.locals.title = "TiTiTiTitle";
  res.locals.sess = req.session; //sess自己取的

  let auth = req.get("Authorization");

  if (auth && auth.indexOf("Bearer ") === 0) {
    auth = auth.slice(7);
    jwt.verify(auth, process.env.TOKEN_SECRET, function (error, payload) {
      if (!error) {
        req.bearer = payload;
      }
      next();
    });
  } else {
    next();
  }
});

//
app.get("/", function (req, res) {
  res.render("msgBoard.ejs", { name: "Hanzawa" });
  // pass a local variable to the view
  // res.render(view [, locals] [, callback])
});






//引入 express
app.use(express.static(__dirname + "/../public"));
//*** 此段404要放在所有路由設定的後面***//
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send('404-找不到網頁>~<"');
});
app.listen(5566, function () {
  console.log("===啟動sever,偵聽埠號5566===");
});
