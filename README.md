# 网站无障碍工具条

## **什么是无障碍工具条？**

> 网站无障碍工具条，这是一个针对于 有视障、听说障碍、读写障碍、肢体障碍，机体功能衰退的老年人群或残障人士开发的一个网站辅助js插件

![](tu1.png)

## 功能

1.文本朗读   2.页面放大&缩小   3.大鼠标样式   4.十字线   5.大字幕  6.指读

## 演示地址
https://muzihuaner.github.io/assist/example/index.html

## 调用方式

- 在网页合适的地方如banner处加入id为 assist-open 的标签；
- 在页面底部 body 之前引入插件js；
- 如果需要特殊处理的地方使用后面的API做对应处理；
- 在网页根目录上传 /src/assets/allaw.cur文件;

例子：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>网站无障碍工具条</title>
</head>
<body>
    <div id='assist-open'>无障碍</div>
    <script type="text/javascript" src="../dist/assist-entry.js"></script>
</body>
</html>
```

CDN地址（可替换）

```html
<script type="text/javascript" src="https://fastly.jsdelivr.net/gh/muzihuaner/assist@main/dist/assist-entry.js"></script>
```

无障碍图标样式

<img src="https://a.sinaimg.cn/mintra/pic/2201190827/32aria.png" style="zoom:25%;" />

```html
<div><img src="https://a.sinaimg.cn/mintra/pic/2201190827/32aria.png" height="32px" id='assist-open'></div>
```

## API

- showTag; 用于打开无障碍标识，（点击无障碍后并不在当前页面打开，而是跳转到其他没有调用showTag的页面打开）

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>网站无障碍工具条</title>
</head>
<body>
<a  id='assist-open' assist-href='https://'>无障碍</a>
<script type="text/javascript" src="dist/assist-entry.js"></script>
 <script>
          ~(function(){
            AssistEntry.showTag() // 如果当前页面点击 无障碍 按钮后需要跳转到其他页面打开无障碍功能，则需要调用此函数做cookie标记
          })()
 </script>
</body>
</html>
```

- zoomState; 返回页面放大倍数

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>网站无障碍工具条</title>
</head>
<body>
<a  id='assist-open' assist-href='https://'>无障碍</a>
<script type="text/javascript" src="dist/assist-entry.js"></script>
 <script>
          ~(function(){
              AssistEntry.message.subscribe('zoomState', state => {
                    console.log(`页面放大倍数：${state}`);
              })
          })()
 </script>
</body>
</html>
```

- openState; 返回插件打开状态

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>网站无障碍工具条</title>
</head>
<body>
<a  id='assist-open' assist-href='https://'>无障碍</a>
<script type="text/javascript" src="dist/assist-entry.js"></script>
 <script>
          ~(function(){
              AssistEntry.message.subscribe('openState', state => {
                    console.log(`是否开启无障碍模式：${state}`);
             })
          })()
 </script>
</body>
</html>
```

- bigTextState; 大字幕开启状态

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>网站无障碍工具条</title>
</head>
<body>
<a  id='assist-open' assist-href='https://'>无障碍</a>
<script type="text/javascript" src="dist/assist-entry.js"></script>
 <script>
          ~(function(){
              AssistEntry.message.subscribe('bigTextState', state => {
                    console.log(`是否开大字幕模式：${state}`);
             })
          })()
 </script>
</body>
</html>
```

### 页面标注:

> 对于插件无法识别或识别不准的标签需业务自行标注，标注规范如下

1 - 对于img标签，需设置 alt ，如

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>网站无障碍工具条</title>
</head>
<body>
 <img alt="网站无障碍工具条无障碍图片" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201306%2F25%2F20130625150506_fiJ2r.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627139099&t=524628587af020410785e8ba98157609">
</body>
</html>
```

2 - 对于其他标签，需使用 title 进行标注，如

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>网站无障碍工具条</title>
</head>
<body>
 <div title="网站无障碍工具条">
   网站无障碍工具条
 </div>
</body>
</html>
```

3 - 对于非语意化标签，需加入 role来标注其真实属性，如果不标注title，则取标签内容，如

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>网站无障碍工具条</title>
</head>
<body>
 <div role="button" title="提交">
   提交
 </div>
</body>
</html>
```

### 隐藏模块：

> 对业务中需要隐藏的模块加一个class名 qunar-assist-hide ，插件在打开的时候会自动监测这个class名统一隐藏

### 页面缩放影响：

> 随着页面放大，部分非自适应或者绝对定位的组件可能会出现错位问题，需业务开发自行调整

### 大段文本识别：

> 对于可能出现大段文本的地方，需要在当前标签加一个名为 qunar-assist-long-text 的class，插件会自动对这个class下的内容进行分割

### 兼容性

- ie10+
- 所有主流浏览器
- 火狐（不支持页面放大功能）



[开发者关注](./DEVELOPER.md "开发者关注")

参考：
https://github.com/duheng/assist

https://github.com/gemgin/AmblyopiaTool

https://blog.csdn.net/Z51047299/article/details/123617530

本项目使用百度TTS，可参考
https://www.cnblogs.com/HGNET/p/16304126.html

