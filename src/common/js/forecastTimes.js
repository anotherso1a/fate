import { getStorage, setStorageSync } from "../utils/storage"

export const FORECAST_TIMES_KEY = 'FORECAST_TIMES_KEY'

export const MAX_FORECAST_TIMES = 3

export function isANewDay(stamp){
  return Math.floor(Date.now() / 86400000) !== Math.floor(stamp / 86400000)
}

export class ForecastTimesClass{
  constructor(){
    this.update()
  }
  get canRecord(){
    return isANewDay(this.stamp) || this.times < MAX_FORECAST_TIMES
  }
  update(){
    let { times = 0, stamp = 0 } = getStorage(FORECAST_TIMES_KEY) || {}
    this.times = isANewDay(stamp) ? 0 : times
    this.stamp = stamp
  }
  record(){
    if (!this.canRecord) throw new Error('OVER_MAX_FORECAST_TIMES')

    isANewDay(this.stamp)
      ? this.times = 1
      : this.times < MAX_FORECAST_TIMES && ++this.times


    setStorageSync(FORECAST_TIMES_KEY, {
      times: this.times,
      stamp: Date.now()
    })
  }
  reduce(){
    this.canRecord
      ? this.times = this.times - 1 < 0 ? 0 : this.times - 1
      : this.times = MAX_FORECAST_TIMES - 1

    setStorageSync(FORECAST_TIMES_KEY, {
      times: this.times,
      stamp: Date.now()
    })
  }
}

let forecastIns = new ForecastTimesClass()

export function ForecastTimes(){
  if (forecastIns) {
    forecastIns.update()
    return forecastIns
  }
  return forecastIns = new ForecastTimesClass()
}
