# wepy-readhub

## install
```bash
npm install wepy-cli -g
cd wepy-readhub
npm install
wepy build --watch
```

#### 项目目录结构
```
├── dist                   微信开发者工具指定的目录
├── node_modules           
├── src                    代码编写的目录
|   ├── components         组件文件夹（非完整页面）
|   |   ├── com_a.wpy      可复用组件 a
|   |   └── com_b.wpy      可复用组件 b
|   ├── pages              页面文件夹（完整页面）
|   |   ├── index.wpy      页面 index
|   |   └── page.wpy       页面 page
|   └── app.wpy            小程序配置项（全局样式配置、声明钩子等）
└── package.json           package 配置
```

#### 开发使用说明
1. 使用`微信开发者工具`新建项目，本地开发选择`dist`目录。
2. `微信开发者工具` --> 项目 --> 关闭ES6转ES5。
3. 本地项目根目录运行`wepy build --watch`，开启实时编译。

###代码规范：
1. 变量与方法使用尽量使用驼峰式命名，避免使用`$`开头。
以`$`开头的方法或者属性为框架内建方法或者属性，可以被使用，使用前请[参考API文档](https://wepyjs.github.io/wepy/#/#api)。
2. 入口，页面，组件的命名后缀为`.wpy`。外链的文件可以是其它后缀。
请参考[wpy文件说明](https://wepyjs.github.io/wepy/#/#wpy文件说明)
3. 使用ES6语法开发。
框架在ES6下开发，因此也需要使用ES6开发小程序，ES6中有大量的语法糖可以让我们的代码更加简洁高效。
4. 使用Promise
框架默认对小程序提供的API全都进行了 Promise 处理，甚至可以直接使用`async/await`等新特性进行开发。

## 说明
[Readhub](https://readhub.me/) 是 小道消息的 作者 Fenng（冯大辉) 老师创业公司 无码科技 的第一款产品。这是一款极简的资讯类工具，旨在每天花几分钟了解互联网行业里发生的事情。目前主要分为热门话题 ，科技动态，开发者资讯三个部分。
