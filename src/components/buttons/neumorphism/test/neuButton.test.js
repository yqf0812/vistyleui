import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import neuButton from "./../index.vue";
import themeStyles from "./../themeColor";

function obj2String(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");
}
describe("测试neuButton组件", () => {
  it("测试neuButton组件是否渲染", () => {
    // 准备
    const wrapper = mount(neuButton);
    expect(wrapper.exists()).toBe(true);
  });
  // 测试尺寸大小
  it("测试neuButton组件的尺寸大小， 小尺寸", () => {
    // 准备
    const wrapper = mount(neuButton, {
      props: {
        size: "small",
      },
    });
    // 获取 button 元素
    const button = wrapper.find("button");
    // 断言
    expect(button.classes()).toContain("btn-small");
  });
  it("测试neuButton组件的尺寸大小， 大尺寸", () => {
    // 准备
    const wrapper = mount(neuButton, {
      props: {
        size: "large",
      },
    });
    // 获取 button 元素
    const button = wrapper.find("button");
    // 断言
    expect(button.classes()).toContain("btn-large");
  });
  it("测试neuButton组件的尺寸大小， 中尺寸", () => {
    // 准备
    const wrapper = mount(neuButton);
    // 获取 button 元素
    const button = wrapper.find("button");
    // 断言
    expect(button.classes()).toContain("btn-medium");
  });
  it("测试neuButton组件的disabled属性", () => {
    // 准备
    const wrapper = mount(neuButton, {
      props: {
        disabled: true,
      },
    });
    // 获取 button 元素
    const button = wrapper.find("button");
    // 断言
    expect(button.attributes()).toHaveProperty("disabled");
  });
  it("测试neuButton组件的theme属性", () => {
    // 准备
    const themes = ["red", "blue", "green"];
    themes.forEach((theme) => {
      const wrapper = mount(neuButton, {
        props: {
          theme: theme,
        },
      });
      const redStyle = obj2String(themeStyles[theme]);
      // 获取 button 元素
      const button = wrapper.find("button");
      // 断言
      expect(button.attributes("style")).toMatch(redStyle);
    });
  });
  it("测试neuButton组件的自定义颜色", () => {
    const wrapper = mount(neuButton, {
      props: {
        theme: "custom",
        bgColor: "#fff0e0",
        textColor: "#b36b15",
        shadowLight: "#ffffff",
        shadowDark: "#e6c29e",
      },
    });
    // 获取 button 元素
    const button = wrapper.find("button");
    expect(button.attributes("style")).not.toMatch(
      "--bg-color: #ffffff; --text-color: #5a6270; --shadow-light-color: #ffffff; --shadow-dark-color: #e0e0e0;"
    );
  });
});
