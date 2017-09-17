/**
 * Created by moyong on 2017/9/15.
 * JSON.parse() 是 字符串 转 js对象，JSON.stringify()才是 js对象转 字符串.
 */
//使用 mongo js shell 进行数据的加工，输出为 csv 文件，直接采集到数据库
//mongo --host 172.16.16.80  nutch --quiet get.js  >gonglu.csv

//base64加密 解密

/* //1.加密
 var result = Base.encode('125中文');  //--> "MTI15Lit5paH"

 //2.解密
 var result2 = Base.decode(result); //--> '125中文'
 */


//var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

/**
 * 数据提取函数
 * @param item
 * @param datakey
 */
function getdata(item,datakey) {
    print(BaseEncoding.base64().decode(item.content));

//     //1.加密
//     var str = '124中文内容';
//         Base64.decode(item.content);
//     var result = base.encode(str);
// //document.write(result);
// //2.解密
//     var result2 = base.decode(result);
//     print(result2);

    // // print(JSON.stringify(item));
    // //print(JSON.stringify(item._id));
    // // print(JSON.stringify(item.text));
    // //
    // //var data = JSON.parse(item.text); //字符串转化为 json 对象 方法1
    // // var data = eval(item.text);//字符串转化为 json 对象 方法2
    // var data =(new Function("","return "+item.text))(); //字符串转化为 json 对象 方法3
    //
    // var targetdata=data[datakey];
    // // print(JSON.stringify(targetdata));
    //
    // //数据转换json2csv
    // targetdata.forEach(function(line){
    //     print(JSON.stringify(line));
    //     for(var k in line){
    //         var item = line[k];
    //
    //         var out=new Array();
    //         for(var j in item) {
    //             out.push(item[j]);
    //         }
    //         print(out.join("|"));
    //     }
    // })

}

//db.gonglu_webpage.find({}, {"text": 1}).forEach(function(o){getdata(o,"jdata146")});
db.baidu_webpage.find({}, {"content": 1}).forEach(function(o){getdata(o)});

