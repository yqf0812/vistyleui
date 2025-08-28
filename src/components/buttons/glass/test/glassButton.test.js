import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import glassButton from "./../index.vue";
describe("测试玻璃组件", () => {
  it("测试玻璃组件", () => {
    const wrapper = mount(glassButton);
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
  });
  it("测试玻璃组件的尺寸大小", () => {
    const size = ["small", "medium", "large"];
    size.forEach((s) => {
      const wrapper = mount(glassButton, {
        props: {
          size: s,
        },
      });
      const button = wrapper.find("button");
      expect(button.classes()).toContain(`btn-${s}`);
    });
  });
});
