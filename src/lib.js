import ViNButton from "./components/buttons/neumorphism/index.vue";
import ViGButton from "./components/buttons/glass/index.vue";
import ViRButton from "./components/buttons/retro/index.vue";
import ViMButton from "./components/buttons/marquee/index.vue";
import "./assets/css/index.scss";

const components = {
  ViNButton,
  ViGButton,
  ViRButton,
  ViMButton,
};

const install = (Vue) => {
  if (install.installed) return;
  install.installed = true;
  // 全局注册基础组件

  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
    // 同时注册 kebab-case 版本的组件名（vi-g-button 格式）
    Vue.component(kebabCase(key), components[key]);
  });
};
// 自动安装（如果是在浏览器环境中通过 <script> 标签引入）
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use({ install });
}
// 导出所有组件（让用户可以按需导入）
export { ViNButton, ViGButton, ViRButton, ViMButton };

// 导出install函数，让用户可以手动安装
export default {
  install,
  ...components,
};

// 工具函数：将 PascalCase 转换为 kebab-case
function kebabCase(str) {
  return str
    .replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
    .replace(/^-/, "");
}
