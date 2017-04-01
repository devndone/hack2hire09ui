let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB

// load name from config
let open = indexedDB.open('dbs', 4)

open.onupgradeneeded = function() {
  let db = open.result
  if (db.objectStoreNames.contains('cache')) {
    db.deleteObjectStore('cache')
  }
  db.createObjectStore("cache", {keyPath: "url"})
}

const db = function() {
  return new Promise(function(resolve, reject) {

    if (open.readyState.toLowerCase() === 'pending') {
      open.onsuccess = function() {
        console.log('successfully opened db')
        resolve(open.result)
      }

      open.onerror = function() {
        console.log('error opened db')
        reject(open.errorCode)
      }
    } else {
      resolve(open.result)
    }

  })
}

export {
  db
}
