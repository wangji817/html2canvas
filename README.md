### html2canvas前端页面生成图片

#### 准备工作提前预知：
1.nodejs（最好是最新，可以自带npm）下载地址：https://npm.taobao.org/mirrors/node/v8.9.0/node-v8.9.0-x64.msi<br/>
2.node模块包：babel-core，babel-loader，babel-preset-es2015，babel-preset-react，css-loader，extract-text-webpack-plugin，jquery，node-sass，react，react-dom，sass-loader，style-loader，webpack，webpack-dev-server<br/>
3.创建一个项目newReact文件夹<br/>

#### 启动命令
1.npm install 如果无法下载使用cnpm<br/>
2.npm run build 文件修改监听<br/>
3.npm run dev 编译打包启动服务<br/>
4.访问地址:http://localhost:8989/views/

#### 开始搭建
1.在newReact项目下呼出dos窗口编辑。<br/>
2.可使用淘宝镜像去安装对应模块npm install -g cnpm --registry=https://registry.npm.taobao.org<br/>
3.输入npm init 将生成package.json文件，可以一直回车默认，不过需要name与当前项目名不一致。<br/>
4.安装webpack，cnpm install --save-dev webpack@3.8.1 webpack-dev-server@2.9.5<br/>
![](http://www.xyji.top/img/project1.png)<br/>
5.安装react对应依赖的模块，输入cnpm install --save-dev babel-core babel-loader@7.1.2 babel-preset-es2015 babel-preset-react css-loader style-loader node-sass sass-loader extract-text-webpack-plugin jquery react react-dom html2canvas<br/>
![](http://www.xyji.top/img/project2.png)<br/>
6.在package.json的scripts添加：
```javascript
"build": "webpack --watch",
"dev": "webpack && webpack-dev-server --devtool eval --progress --colors --content-base --host 0.0.0.0"
```
然后可以启动程序了。输入npm run dev
如果看到这样的展示说明已成功部署。访问地址：
http://localhost:8989/views/index.html<br/>
![](http://www.xyji.top/img/project4.png)<br/>
![](http://www.xyji.top/img/project5.png)<br/>
![](http://www.xyji.top/img/project6.png)<br/>
7.如果需要监听文件修改并实时刷新浏览器则需另外启动cmd窗口输入npm run build，关闭进程用tskill node
![](http://www.xyji.top/img/project7.png)<br/><br/>
![](http://www.xyji.top/img/project8.png)<br/>
![](http://www.xyji.top/img/project.gif)<br/>
