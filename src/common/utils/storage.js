import mpx from '@mpxjs/core'

// 第一次获取全部的storage，以后的操作都从这个里取，set的时候同时改这个对象
let storageObj = {}

export function getStorage (key){
  if (storageObj && storageObj[key]) {
    return storageObj[key]
  } else {
    storageObj[key] = mpx.getStorageSync(key)
    return storageObj[key]
  }
}

export function setStorageSync (key, data){
  storageObj[key] = data
  mpx.setStorageSync(key, data)
}

export function setStorage ({ key, data }){
  storageObj[key] = data
  mpx.setStorage({
    key,
    data
  })
}
