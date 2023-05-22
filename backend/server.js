const express = require("express");
const app = express();
const dotenv = require("dotenv");
const {authorize,redirect}=require('./shopifyOAuthHelper')


dotenv.config()
const dbConfig = require("../backend/config/dbconfig");


const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/api/shopify/authorize', async (req, res)=>{ 
  console.log('kkkk',req.query.shop)
  return res.redirect(await authorize(req.query.shop)) 
})

app.get("/api/shopify/redirect", async (req, res)=>{
   return res.json(await redirect(req.query.code))
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



