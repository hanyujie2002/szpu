# 仿深圳职业技术大学官网主页

## 介绍

本项目是仿照[深圳职业技术大学官网主页](https://www.szpu.edu.cn/)的前端项目。

## 技术

- Nuxt.js
- Tailwind CSS
- aos
- Swiper

## 开发

本项目包管理器为 pnpm，请采用 pnpm 开发本项目。

1. 安装所有依赖

```bash
pnpm install
```

2. 运行开发服务器

```bash
pnpm dev
```

之后用浏览器打开 `http://localhost:3000` 就可以看到网页内容了。

## 部署

本项目采用 SSG，请使用以下命令生成静态文件：

```bash
pnpm generate
```

之后就可以在 `./output/public` 文件夹找到生成的静态文件，并部署网站。
