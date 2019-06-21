# nodejs-demo-cors
CORS跨域与AJAX请求
## 启动应用

`node server.js 8888`

或者

`node server 8888`

## 本地跨域访问
1. 需在本地设置host文件 
-  127.0.0.1 frank.com
-  127.0.0.1 jack.com
2. 运行
-  运行 node server.js 8001
-  运行 noed server.js 8002
3. 在浏览器上访问
- frank.com:8001
- jack.com:8002

## 后台启动应用

`node server.js 8888 >! log 2>&1 &`
