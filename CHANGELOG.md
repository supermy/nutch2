###2017-09-12
 
*    完成 ajax 页面的抓取协议 protocol-httpajax

###2017-06-06
*    完成 text 数据格式转换为 json ,在去上海途中的火车上完成。

###2017-06-05

*    启动 es:
        cd /Users/moyong/project/env-myopensource/3-tools/mytools/common/elasticsearch
        fig up -d && fig ps 
        http://127.0.0.1:9200/
        http://localhost:9200/_plugin/head/ 
        docker pull docker.elastic.co/kibana/kibana:5.4.1
        kibana: http://localhost:5601
        
        mongo --eval "printjson(db.serverStatus())"
        查看网页内容        

*    古诗词抓取
        bin/crawl urls/gushichi.txt gushichi 6
        mongo nutch --quiet --eval  'db.gushichi_webpage.find({_id:"org.gushiwen.www:http/gushi/changjiang.aspx"},{content:1})[0]["content"].base64()' |base64 -D
        mongo nutch --quiet --eval  'db.gushichi_webpage.findOne({baseUrl:"http://so.gushiwen.org/view_8328.aspx"},{})["content"].base64()' |base64 -D
         
###2017-06-04
    完成初始化配置；
    数据存储到 mongodb;
    常用指令：
        抓取网页：bin/crawl urls/seed.txt TestCrawl 2
        数据库查看数据： mongo / show tables;  /db.collection.findOne()
    