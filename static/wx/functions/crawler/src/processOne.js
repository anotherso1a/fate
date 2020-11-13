const axios = require('axios')
const cheerio = require('cheerio')

let TODAY = Math.floor(Date.now() / 86400000) // 今天
let TODAY_WORDS = [] // 今日语录

function getToday(){
  return Math.floor(Date.now() / 86400000)
}

function updateTodayWords(){
  console.log('fetched one words')
  return axios.get('https://www.wufazhuce.com/').then(res => {
    const $ = cheerio.load(res.data)
    let dailyWordsDom = $('#carousel-one > div > .item')
    console.log(dailyWordsDom)
    let result = dailyWordsDom.map((_, e) => {
      return {
        date: cheerio(e).find('.fp-one-titulo-pubdate').text().replace(/\s+/g, ' ').trim(),
        image: cheerio(e).find('.fp-one-imagen').attr('src'),
        words: cheerio(e).find('.fp-one-cita').text().trim()
      }
    }).toArray()
    TODAY_WORDS = result
    TODAY = getToday()
    return TODAY_WORDS
  })
}

module.exports = async function(){
  let now = getToday()
  if(now == TODAY && TODAY_WORDS.length){
    return TODAY_WORDS
  }
  return await updateTodayWords()
}
