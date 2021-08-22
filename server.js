// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

const port = process.env.PORT

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
// https://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/html/index.html");
});
app.get("/download", function(req, res) {
  res.sendFile(__dirname + "/html/download.html");
});
app.get("/command", function(req, res) {
  res.sendFile(__dirname + "/html/command.html");
});
app.get("/map_p", function(req, res) {
  res.sendFile(__dirname + "/html/map_p.html");
});
app.get("/map_old", function(req, res) {
  res.sendFile(__dirname + "/html/map_old.html");
});
app.get("/map_c", function(req, res) {
  res.sendFile(__dirname + "/html/map_c.html");
});
app.get("/command", function(req, res) {
  res.sendFile(__dirname + "/html/command.html");
});
app.get("/actionbar_shop", function(req, res) {
  res.sendFile(__dirname + "/html/actionbar_shop.html");
});

//新增一個server並指定他的頁面資訊，內容為'Hello World!'


//監聽得到的 port 號開啟
app.listen(port, () => console.log(`Listening on ${port}`));
