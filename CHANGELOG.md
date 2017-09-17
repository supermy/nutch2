###20190917

*  增加多 xpath 支持

```aidl

   <property>
        <name>xpath-kuai.baidu.com-/webapp/bus/list.html</name>
        <value>//div[@class='js_list_wrapper']/ul</value>
        <description>
            System.out.println(url.getHost()); kuai.baidu.com/
            System.out.println(url.getPath()); webapp/bus/list.html

        </description>
    </property>

    <property>
        <name>xpath-kuai.baidu.com-/webapp/bus/list.html</name>
        <value>//div[contains(@class, 'page-list')]/ul</value>
        <description>
            System.out.println(url.getHost()); kuai.baidu.com/
            System.out.println(url.getPath()); webapp/bus/list.html

        </description>
    </property>


```

```aidl

        conf = http.getConf();
        String[] xpathkeys = conf.getTrimmedStrings(sb.toString());

        DomElement div = page101.createElement("div");
        for (String xpath : xpathkeys
                ) {
            DomElement divc = page101.createElement("div");
            divc.setAttribute("targetdata","ok");
            List<HtmlUnorderedList> byXPath = page101.getByXPath(xpath);
            for (HtmlUnorderedList ul : byXPath
                    ) {
                divc.appendChild(ul);
                System.out.println(ul.asXml());
                System.out.println("*************");
            }
            div.appendChild(divc);
        }
        if (div.hasChildNodes()){
            content = div.asXml().getBytes();
        }


```

###20170915

*   配置 xpath 提取目标数据
```aidl
    目标 url
    https://kuai.baidu.com/webapp/bus/list.html?startcityid=%257B%2522cityid%2522%253A131%252C%2522cityname%2522%253A%2522%25E5%258C%2597%25E4%25BA%25AC%2522%252C%2522type%2522%253A2%257D&arrivalcityid=%257B%2522cityid%2522%253A307%252C%2522cityname%2522%253A%2522%25E4%25BF%259D%25E5%25AE%259A%2522%252C%2522type%2522%253A2%257D&startname=北京&arrivename=保定&startdatetime=1505471400000

    <property>
        <name>xpath-kuai.baidu.com-/webapp/bus/list.html</name>
        <value>//div[@class='js_list_wrapper']/ul</value>
        <description>
            System.out.println(url.getHost()); kuai.baidu.com/
            System.out.println(url.getPath()); webapp/bus/list.html

        </description>
    </property>
    

```

###20170913

*   json 数据的 ETL 处理： json to csv
*   mongo json js ETL 加工模板

###2017-09-12
 
*    完成 ajax 页面的抓取协议 protocol-httpajax；
*    完成列表与表格数据的精准提取；

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
    