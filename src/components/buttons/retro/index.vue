<template>
  <div class="retro-btn-container">
    <button
      class="retro-btn"
      :class="[sizeClass]"
      :style="themeStyle"
      :disabled="disabled"
      @click="handleClick"
      v-bind="$attrs"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useSizeClass } from "./../../../hooks/useSizeClass";
import { blue, green, red } from "./themeColor";
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
  theme: {
    type: String,
    default: "",
    validator: (value) => ["green", "blue", "red", "custom"].includes(value),
  },
  bgColor: {
    type: String,
    default: "",
  },
  borderLight: {
    type: String,
    default: "",
  },
  borderDark: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["click"]);
const handleClick = (event) => {
  emit("click", event);
};
const { sizeClass } = useSizeClass(props.size);

const themeStyle = computed(() => {
  if (props.theme === "green") {
    return green;
  } else if (props.theme === "blue") {
    return blue;
  } else if (props.theme === "red") {
    return red;
  } else if (props.theme === "custom") {
    return {
      "--bg-color": props.bgColor,
      "--border-light": props.borderLight,
      "--border-dark": props.borderDark,
    };
  }
});
</script>

<style lang="scss" scoped>
.retro-btn-container {
  .retro-btn {
    /* 复古配色 */
    --bg-color: #c0c0c0;
    --text-color: #000000;
    --border-light: #ffffff;
    --border-dark: #7b7b7b;

    /* 尺寸和基础样式 */
    // padding: 12px 24px;
    // font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    background-color: var(--bg-color);
    color: var(--text-color);
    border-width: 4px;
    border-style: solid;
    border-top-color: var(--border-light);
    border-left-color: var(--border-light);
    border-right-color: var(--border-dark);
    border-bottom-color: var(--border-dark);
    transition: transform 0.1s ease, box-shadow 0.1s ease;
    outline: none;
  }
  .retro-btn:hover:not(:disabled) {
    box-shadow: 0 0 8px rgba(255, 255, 150, 0.5);
  }

  /* 点击状态 - 模拟按压效果 */
  .retro-btn:active:not(:disabled) {
    /* 边框反转模拟凹陷 */
    border-top-color: var(--border-dark);
    border-left-color: var(--border-dark);
    border-right-color: var(--border-light);
    border-bottom-color: var(--border-light);
  }

  /* 禁用状态 */
  .retro-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    color: #555555;
    --border-light: #aaaaaa;
    --border-dark: #888888;
  }
}
</style>
