# Vue 3 + Typescript + Vite

通过 Vue3 的模板改造成 Electron 的模板，同时使用 Eslint 和 Prettier 作为代码格式管理工具；该项目是使用 JSX 语法来开发，不是使用传统的.vue 模板开发

# 目录结构

&emsp;├── package.json &emsp;&emsp;npm 文件  
&emsp;├── vite.config.js &emsp;&emsp;vite 配置问价  
&emsp;├── index.html &emsp;&emsp;Vite 项目的入口文件  
&emsp;├── main.ts &emsp;&emsp;Electron 主入口文件  
&emsp;├── preload.ts &emsp;&emsp;Electron 主入口文件  
&emsp;├── .prettierrc.js &emsp;&emsp;Prettier 配置文件  
&emsp;├── .eslintrc.js &emsp;&emsp;Eslint 配置文件  
&emsp;├── public &emsp;&emsp;公共文件  
&emsp;└── src &emsp;&emsp;Vue 文件目录  
&emsp;&emsp;&emsp; ├── App.tsx &emsp;&emsp;Vue 页面  
&emsp;&emsp;&emsp; ├── main.ts &emsp;&emsp;Vue3 入口  
&emsp;&emsp;&emsp; ├── vite-env.d.ts &emsp;&emsp;声明文件  
&emsp;&emsp;&emsp; └── shims-vue.d.ts &emsp;&emsp;声明文件

## 使用方法

1. yarn 安装，或者 npm install 安装依赖包
2. yarn electron:dev 或者 npm run electron:dev 启动 electron
3. yarn electron:exe 会先完成编译 vue 文件后，再去执行 electron 打包程序，同时在根目录生成 out 文件夹
