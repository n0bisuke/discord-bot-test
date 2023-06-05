const express = require('express');
const util = require("util");
const os = require('os');
const path = require('path');

const hostname = os.hostname();
const port = process.env.PORT || 8080;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

msg = process.env.MSG ? process.env.MSG : `I was built by Buildpacks with Code Engine! ${JSON.stringify(process.versions)}`;

app.get('/', (request, response) => {
  response.send(util.format(`<!DOCTYPE html>
<html>
  <head>
    <title>HOGEHOGE</title>
  </head>
  <body>
    <div class="center-box">
      <img src="/images/developer.png">
      <h1>HOGEHOGE</h1>
      <p>%s</p>
      <p>hostname: %s</>
    </div>
  </body>
  <style>
    .center-box{
      text-align:center;
    }
    img {
      width: 300px;
    }       
  </style>
</html>`, msg, hostname));
});

app.listen(port);
console.log('Server running at http://0.0.0.0:'+ port + '/');