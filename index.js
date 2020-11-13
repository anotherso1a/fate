const fs = require('fs');
const readline = require('readline');

const gua = {
  // "乾下乾上": {
  //   desc: "《乾》卦：极其顺利，利于占问。",
  //   pos: ['（自下而上）第一位，阳爻：龙潜伏着，不要行动。']
  // }
}

/*
* 按行读取文件内容
* 返回：字符串数组
* 参数：fReadName:文件名路径
*      callback:回调函数
* */
function readFileToArr(fReadName, callback) {
  let index = ""
  let isNextRecord = false
  
  let fRead = fs.createReadStream(fReadName);
  let objReadline = readline.createInterface({
    input: fRead
  });
  let arr = new Array();
  objReadline.on('line', function (line) {
    let isIndex = line.match(/（([^自]下.上)）/)
    if(isIndex){
      index = isIndex[1]
      gua[index] = {
        pos: []
      }
      return
    }
    if(gua[index] && isNextRecord) {
      if(/《.*?》卦：.*/g.test(line)){
        gua[index].desc = line.trim()
      }else{
        gua[index].pos.push(line.trim().replace(/^.*?：/g, ''))
      }
    }
    isNextRecord = /译文/g.test(line)
  });
  objReadline.on('close', function () {
    // console.log(arr);
    callback();
  });
}


let zhouyi = readFileToArr('test.txt', () => fs.writeFileSync('gua.js',JSON.stringify(gua,null,2),'utf8'))



