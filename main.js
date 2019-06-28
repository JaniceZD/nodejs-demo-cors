/**
 * 封装一个 jQuery.ajax
 */

window.jQuery = function (nodeOrSelector) {
  let nodes = {}
  nodes.addClass = function () { }
  nodes.setText = function () { }
  return nodes
}

window.$ = window.jQuery

window.jQuery.ajax = function ({ url, method, body, successFn, failFn, headers }) {
  let request = new XMLHttpRequest()
  request.open(method, url)
  for (let key in headers) {
    let value = headers[key]
    request.setRequestHeader(key, value)
  }
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        successFn.call(undefined, request.responseText)
      } else if (request.status >= 400) {
        failFn.call(undefined, request)
      }
    }
  }
  request.send(body)
}

function f1(responseText) {
  console.log(responseText)
}
function f2(responseText) {
  console.log('success')
}

mybutton.addEventListener('click', (e) => {
  window.jQuery.ajax({
    url: '/xxx',
    method: 'post',
    body: 'hello!',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Janice': '18'
    },
    successFn: (x) => {
      f1.call(undefined, x)
      f2.call(undefined, x)
    },
    failFn: (x) => {
      console.log(x.status)
      console.log(x.responseText)
    }
  })
})
