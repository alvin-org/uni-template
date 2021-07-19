# uniapp-multiterminal



## 简介

​	基于uni-app通过cli手脚架创建的的多端项目模板

```
vue create -p dcloudio/uni-preset-vue <project-name>
```

​	与HBuilder一样支持保存时自动编译,具体可移步uni-app官网: https://uniapp.dcloud.io/quickstart-cli?id=%e5%88%9b%e5%bb%bauni-app

​	目前该项目使用uview-ui框架,主要支持微信小程序、百度小程序、H5

### 安装依赖

```
npm install
```

### 运行

```
npm run dev:%PLATFORM%
```

### 发布

```
npm run build:%PLATFORM%
```

| 值(%PLATFORM%) | 平台       |
| -------------- | ---------- |
| mp-weixin      | 微信小程序 |
| mp-baidu       | 百度小程序 |
| h5             | H5         |

### 准备工作

- uview-ui框架目前存在问题,若编译报错请卸载后使用npm方式安装

```
npm install uview-ui
```

- 为保证项目编程风格规范统一:

如使用 Visual Studio Code 编辑器以下操作

1. 在编辑器中安装Eslint 、 Prettier - Code formatter 插件

![](https://files.cnhnb.com/uniapp-multiterminal/imgs/md-1-1.png)

![](https://files.cnhnb.com/uniapp-multiterminal/imgs/md-1-2.png)

2. 运行npm install 安装package.json中的相关依赖 ( 内含eslint 、Prettier等依赖包 )
3. 在Visual Studio Code 编辑器的设置文件 settings.josn 中追加以下设置

```json
  "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
```

![](https://files.cnhnb.com/uniapp-multiterminal/imgs/md-2-1.png)

![](https://files.cnhnb.com/uniapp-multiterminal/imgs/md-2-2.png)

![](https://files.cnhnb.com/uniapp-multiterminal/imgs/md-2-3.png)

### 编译后的文件

开发环境编译打包后的文件 存放在 **dist/dev** 中

生产环境编译打包后的文件 存放在 **dist/prod** 中

tips:需使用微信开发工具**手动**导入

### 目录结构

```bash
├── dist                       # 编译后的文件
│   │── ...            		   # 其他
│   │── dev            		   # 开发环境编译后的文件(可导入到开发工具中预览或发布)
│   └── prod            	   # 生产环境编译后的文件(可导入到开发工具中预览或发布)
├── node_modules               # 依赖包
├── public                     # 静态资源
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── components             # 全局公用组件
│   ├── config                 # 环境变量配置
│   ├── pages                  # views 所有页面
│   ├── static                 # 图片 样式等静态资源
│   ├── store                  # 全局 store管理
│   ├── utils                  # 全局公用方法
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   ├── manifest.json          # 各端应用配置文件
│   ├── pages.json             # 页面路由配置文件
│   └── uni.scss               # uni-app内置的常用样式变量
├── .eslintignore              # eslint忽略文件配置
├── .eslintrc.js               # eslint 配置项
├── .gitignore                 # git忽略文件配置
├── babel.config               # babel 配置
├── package.json               # 项目描述文件
├── package-lock.json          # 依赖包快照
├── postcss.config.js          # postcss 配置
└── README.md                  # 项目说明文档
```

