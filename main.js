/**
 * 使用原生JS发起AJAX请求
 */

mybutton.addEventListener('click', (e) => {
  var request = new XMLHttpRequest()
  request.open('get', 'http://jack.com:8002/xxx')
  request.send()
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        // 把符合 JSON 语法的字符串转换成 JS 对应的值
        let string = request.responseText
        // JSON.parse 是浏览器提供的
        let object = window.JSON.parse(string)
        console.log(object.note)
      }
    }
  }
})
