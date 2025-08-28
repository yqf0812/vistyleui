<template>
  <div class="neu-btn-container">
    <button
      class="neu-btn"
      :class="sizeClass"
      :style="themeStyle"
      :disabled="disabled"
      @click="handleClick"
      :colorCustom="theme === 'custom'"
      v-bind="$attrs"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { light, dark, blue, green, red } from "./themeColor";
const props = defineProps({
  size: {
    type: String,
    default: "medium",
    validator: (value) => ["small", "medium", "large"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  // 自定义颜色
  bgColor: {
    type: String,
    default: "#ffffff",
    required: true,
  },
  textColor: {
    type: String,
    default: "#5a6270",
    required: () => this.theme === "custom",
  },
  shadowLight: {
    type: String,
    default: "#ffffff",
    required: () => this.theme === "custom",
  },
  shadowDark: {
    type: String,
    default: "#e0e0e0",
    required: () => this.theme === "custom",
  },
  // 主题
  theme: {
    type: String,
    default: "light",
    validator: (value) => {
      console.log(value);
      return ["light", "dark", "blue", "green", "red", "custom"].includes(
        value
      );
    },
  },
});

const emit = defineEmits(["click"]);

const sizeClass = computed(() => {
  return props.size === "medium"
    ? "btn-medium"
    : props.size === "large"
    ? "btn-large"
    : "btn-small";
});
const themeStyle = computed(() => {
  switch (props.theme) {
    case "light":
      return light;
    case "dark":
      return dark;
    case "blue": {
      return blue;
    }
    case "green": {
      return green;
    }
    case "red": {
      return red;
    }
    case "custom": {
      return {
        "--bg-color": props.bgColor,
        "--text-color": props.textColor,
        "--shadow-light-color": props.shadowLight,
        "--shadow-dark-color": props.shadowDark,
      };
    }
  }
});
const handleClick = (event) => {
  emit("click", event);
};
</script>
<style scoped lang="scss">
.neu-btn-container {
  /* 轻拟态按钮基础样式 */
  .neu-btn {
    border: none;
    background-color: var(--bg-color, #e0e5ec);
    color: var(--text-color, #6d788a);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    outline: none;
    font-size: 14px;
    border-radius: 12px;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
      box-shadow: 3px 3px 6px #a3b1c640, -3px -3px 6px #ffffff80;
    }
  }

  /* 正常状态阴影 - 外凸效果 */
  .neu-btn:not(:active):not(:disabled) {
    box-shadow: 5px 5px 10px var(--shadow-dark-color, #a3b1c6),
      -5px -5px 10px var(--shadow-light-color, #ffffff);
  }

  /* 点击状态样式 - 内凹效果 */
  .neu-btn:active:not(:disabled) {
    box-shadow: inset 5px 5px 10px var(--shadow-dark-color, #a3b1c6),
      inset -5px -5px 10px var(--shadow-light-color, #ffffff);
    transform: scale(0.99);
  }
}
</style>
