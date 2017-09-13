/**
 * Created by moyong on 2017/9/13.
 * JSON.parse() 是 字符串 转 js对象，JSON.stringify()才是 js对象转 字符串.
 */
//使用 mongo js shell 进行数据的加工，输出为 csv 文件，直接采集到数据库
//mongo nutch --quiet get.js  >gonglu.csv

/**
 * 数据提取函数
 * @param item
 * @param datakey
 */
function getdata(item,datakey) {
    var data = JSON.parse(item.text);
    var targetdata=data[datakey];
    targetdata.forEach(function(line){
        // print(JSON.stringify(line));
        for(var k in line){
            var item = line[k];

            var out=new Array();
            for(var j in item) {
                out.push(item[j]);
            }
            print(out.join("|"));
        }
    })

}

db.gonglu_webpage.find({}, {"text": 1}).forEach(function(o){getdata(o,"jdata99")});
