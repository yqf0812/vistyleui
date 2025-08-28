# 多种风格的组件库

“Vi” 取自 “Visual”（视觉），搭配 “Style”（风格），核心指向 “视觉风格化 UI 组件库”

## 项目介绍

Vi 是一个基于 Vue 3.x 的组件库，旨在提供多种风格的 UI 组件，帮助开发者快速构建美观、易用的应用。

## 功能特点

- **多种风格**：提供多种风格的主题，包括但不限于简约风格、现代风格、复古风格等。
- **易用性**：组件设计简洁明了，易于上手，同时提供详细的文档和示例代码。
- **灵活性**：支持自定义主题，开发者可以根据自己的需求调整组件的样式和行为。
- **高性能**：采用 Vue 3.x 的最新特性，确保组件的高性能和低延迟。

## 安装

```bash
npm install vistyleui --D
```

## 使用

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import vistyleui from "vistyleui";
import "vistyleui/dist/index.css";

const app = createApp(App);
app.use(vistyleui);
app.mount("#app");
```

## 项目运行

```bash
pnpm install
```

```bash
pnpm run dev
```

## 项目打包

```bash
npm run build
```

## 贡献

如果您对 vistyleui 组件库有任何建议或改进意见，欢迎提交 Pull Request 或 Issue。
