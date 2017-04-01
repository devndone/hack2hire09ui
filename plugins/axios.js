import axios from 'axios'
import {info, debug} from './logger'
const urls = {}
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

const request = axios.create({
    baseURL: '',
    headers: {'content-type': 'application/json'},
});

let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

let reqType = 'http://'

if(!config.dev)
  reqType = 'https://'

const grequest = axios.create({
    baseURL: reqType + host + ':' + port
});

const getCache = function(url) {
    return require('./cache').db()
    .then(function(db) {
        const transaction = db.transaction('cache', 'readwrite')
        const store = transaction.objectStore('cache')

        return new Promise(function(resolve, reject) {
            let storeGet = store.get(url)
            console.log('storeGet', storeGet);
            storeGet.onsuccess = function() {
                console.log('storeGet.result', storeGet.result);

                if (storeGet.result) {
                  resolve(storeGet.result.response)
                } else {
                  reject()
                }
            }

            storeGet.onerror = function() {
              console.log('storeGet error')
              reject()
            }
        })
    })
    .catch(function(error) {
      console.log(error)
    })
}

const putCache = function(url, response) {
  return require('./cache').db()
  .then(function(db) {
    const transaction = db.transaction('cache', 'readwrite')
    const store = transaction.objectStore('cache')
    store.put({ url: url, response: JSON.parse(JSON.stringify(response)) })
  })
}

// error handling
const axiosResponseTransform = function(url) {
  return function(response) {
    info(`mp-api: response status-> ${response.status} ${response.statusText}: ${url}`)
    // put to indexedDB, but only if required
    if (process.BROWSER_BUILD && navigator) {
    // if (process.BROWSER_BUILD && navigator && !'serviceWorker' in navigator) {
        putCache(url, response)
    }

    debug(response.data)
    return response.data
  }
}

const get = async function(url) {
    if (process.BROWSER_BUILD && navigator && !navigator.onLine) {
      return getCache(url).then(axiosResponseTransform(url))
    }

    return request.get(url).then(axiosResponseTransform(url))
}

const getg = async function(url) {
    return grequest.get(url).then(axiosResponseTransform(url))
}

const post = async function(url) {
    if (process.BROWSER_BUILD && navigator && !navigator.onLine) {
      return getCache(url).then(axiosResponseTransform(url))
    }

    return request.post(url).then(axiosResponseTransform(url))
}

const postg = async function(url, data) {
    return grequest.post(url, data).then(axiosResponseTransform(url))
}

let options = {}
// The server-side needs a full url to works
if (process.SERVER_BUILD) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}

let ax = axios.create(options)

export { urls, get, post, getg, postg, ax };
