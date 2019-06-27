/**
 * 封装一个 jQuery.ajax
 */

window.jQuery = function (nodeOrSelector) {
  let nodes = {}
  nodes.addClass = function () { }
  nodes.setText = function () { }
  return nodes
}

window.jQuery.ajax = function (url, method, body, success, fail) {
  let request = new XMLHttpRequest()
  request.open(method, url)
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        success.call(undefined, request.responseText)
      } else if (request.status >= 400) {
        fail.call(undefined, request)
      }
    }
  }
  request.send(body)
}

mybutton.addEventListener('click', (e) => {
  window.jQuery.ajax(
    '/xxx',
    'post',
    'hello!',
    (x) => {
      console.log(x)
      console.log('Success')
    },
    (x) => {
      console.log(x.status)
      console.log(x.responseText)
    }
  )
})
