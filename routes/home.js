const express = require("express");
const _ = require('lodash');
const router = express.Router();
const mongoose=require("mongoose");
const find = require("../config/functions/find.js");
let loadData;


router
router.route("/")
.get((req,res)=>{

  loadData =find.searchArticle();
  loadData.then(function(results){
    res.render("index", {
    pictures: results.pictures,
    titles: results.titles,
    tags: results.tags,
    description: results.description,
    article: results.articles,
    dates: results.dates,
    ids: results.ids
    });
  }).catch((err)=>{
console.log(err);})

})




module.exports = router;
