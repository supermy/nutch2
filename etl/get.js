/**
 * Created by moyong on 2017/9/13.
 * JSON.parse() 是 字符串 转 js对象，JSON.stringify()才是 js对象转 字符串.
 */
//使用 mongo js shell 进行数据的加工，输出为 csv 文件，直接采集到数据库
//mongo --host 172.16.16.80  nutch --quiet get.js  >gonglu.csv

/**
 * 数据提取函数
 * @param item
 * @param datakey
 */
function getdata(item,datakey) {
    // print(JSON.stringify(item));
    //print(JSON.stringify(item._id));
    // print(JSON.stringify(item.text));
    //
    var data = JSON.parse(item.text); //字符串转化为 json 对象 方法1
    // var data = eval(item.text);//字符串转化为 json 对象 方法2
    //var data =(new Function("","return "+item.text))(); //字符串转化为 json 对象 方法3

    var targetdata=data[datakey];
    // print(JSON.stringify(targetdata));

    //数据转换json2csv
    targetdata.forEach(function(line){
        print(JSON.stringify(line));
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

db.gonglu_webpage.find({}, {"text": 1}).forEach(function(o){getdata(o,"jdata3")});
// db.baidu_webpage.find({}, {"text": 1}).forEach(function(o){getdata(o,"jdata294")});

