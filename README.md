# nutch2 

[![Build Status](https://travis-ci.org/supermy/nutch2.svg?branch=master)](https://github.com/supermy/nutch2)

## 简介 

通过定制开发nutch爬虫软件，解决单页精准数据提取问题。
* 基于Nutch定制爬虫软件，存储到 Mongodb；（如果有 Hbase 环境，可执行配置将数据抓取到 Hbase）
* 定制获取数据结果为 JSON,方便精准提取数据；
* 可根据url地址 ,定制抓取任务。


## 适用场景

    互联网资料的获取

## 操作步骤

*  安装 mongodb: brew install mongodb ;  mongo 测试可用 

*  克隆：github clone https://github.com/supermy/nutch2

*  编译：ant runtime

*  配置抓取地址：
   vim runtime/local/urls/gushichi.txt
        http://www.gushiwen.org/gushi/quansong.aspx
   
*  配置url 过滤条件：
   vim runtime/local/conf/regex-urlfilter.txt
        +^http://([a-z0-9]*\.)*gushiwen.org/
   
*  抓取网页，数据存储到 mongodb 的 nutch 库  gushichi_webpage 表中：
    cd runtime/local
    bin/crawl urls/gushichi.txt gushichi 1
    
*  查看网页抓取记录数量：nutch -  数据库名称； gushichi_webpage - 数据表名称    
    mongo nutch --quiet --eval 'db.gushichi_webpage.count()'
    >mongo
    >use nutch
    >db.gushichi_webpage.findOne()
    
*  查看网页内容：字段 content 保存网页内容，字段 text 保存正文内容；
    mongo nutch --quiet --eval  'db.gushichi_webpage.findOne({baseUrl:"http://so.gushiwen.org/view_8328.aspx"},{})["content"].base64()' |base64 -D



## 特点

1：可扩展性

       通过plugin，nutch允许任何人扩展它的功能，而我们要做的只是对给定的接口做简单的实现，举个例子：MSWordParser这个插件是用来分析wordwendang的，它就是一个对parser这个接口的实现

2：灵活性

      因为每个人都可以根据自己的需求而写自己的plugin，这样plugin就会有一个很强大的资源库。这样对与应用nutch程序员来说，他可以在自己的搜索引擎上安装符合自己需求的插件，而这些插件就在nutch的plugins中。这对于正在应用nutch的开发者来说应该是一个巨大的福音，因为你有了更多的关于内容抽取的算法来选择，很容易就增加了pdf的分析。

3：可维护性

    每个开发者只要关注自己的问题。对于内核的开发者在为引擎内核扩展的同时，为a plug添加一个描述它的接口就可以了。一个plugin的开发者只要关注这个plugin所要实现的功能，而不需要知道整个系统是怎么工作的。它们仅仅需要知道的是plugin和plug之间交换的数据类型。这使得内核更加简单，更容易维护。
    
    

## 优势：

*   插件模式，方便自定义开发；
*   

## 劣势：

*  较为复杂