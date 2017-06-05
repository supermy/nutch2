# nutch2 

[![Build Status](https://travis-ci.org/supermy/nutch2.svg?branch=master)](https://github.com/supermy/nutch2)

## 简介 
* Nutch 是一个分布式的爬虫软件；整合 MongoDB 进行数据存储；



## 特点
*   存储可配置
*   自定义内容解析插件

## 适用场景

    互联网资料的获取

## 操作步骤

*  配置抓取地址：
   vim runtime/local/urls/seed.txt
   
*  配置url 过滤条件：
   vim runtime/local/conf/regex-urlfilter.txt
   
*  抓取网页：
    bin/crawl urls/seed.txt TestCrawl 2
    
*  查看网页抓取记录数量：    
    mongo nutch --quiet --eval 'db.TestCrawl_webpage.count()'
    
*  查看网页内容：
    mongo nutch --quiet --eval 'db.TestCrawl_webpage.find({ "_id" : "cn.com.bonc.www:http/index.php/about/qywh"})[0]["content"].base64() ' | base64 -D


## 优势：

*   插件模式，方便自定义开发；
*   

## 劣势：

*  较为复杂