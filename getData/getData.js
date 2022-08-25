const express = require('express');
const axios = require('axios');
const tem = require("art-template");
const fs = require("fs");

const app = new express();
app.get('/api/newsdata', async(req, res) =>{
    res.append('Access-Control-Allow-Origin', "*")
    res.append('Access-Control-Allow-Content-Type', "*")
    let {data : result} = await axios.post('https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed?aid=2608&uuid=7125395772090893865&id_type=2&client_type=2608&sort_type=200&cursor=0&limit=20');
    res.send(result.data);
    var str = JSON.stringify(result.data);
    fs.writeFile(__dirname + '/data.json', str, function(err){
        if(err){
            console.log('失败' + err.message);
        }
        console.log('写入成功！');
    })
})
app.listen(8080, () =>{
    console.log('start');
})
