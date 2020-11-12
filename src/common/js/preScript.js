import mpx from '@mpxjs/core'
import fetch from '@mpxjs/fetch'
import apiProxy from '@mpxjs/api-proxy'

mpx.use(fetch).use(apiProxy, { usePromise: true })
