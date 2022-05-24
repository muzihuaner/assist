## 开发者需关注的

#### 基础配置（src/config.json）
1 - namespace 给插件起一个命名空间

2 - domain    在你的具体项目中你需要设置如 .baidu.com 的 domain 来保持你网站多页面之间的状态保持

3 - url       文本转语音的api接口，目前用的是百度免费的，如用于生产环境你需要自行开发

```
{
	"namespace": "mozi-assist",
	"domain": "",  
	"url": "//tts.baidu.com/text2audio"
}
```

#### 开发

```
  npm i
  npm start (启动开发)
```
访问 http://localhost:3000/example/index.html