<template>
  <div class="glass-btn-container">
    <button
      class="glass-btn"
      :class="[sizeClass, themeClass]"
      :disabled="disabled"
      :style="bgColorStyle"
      @click="handleClick"
      v-bind="$attrs"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { hexToRgb, colorType, rgbParse } from "./../../../utils/index";
import { useSizeClass } from "./../../../hooks/useSizeClass";
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
  color: {
    type: String,
    default: "",
  },
  bgRgba: {
    type: String,
    default: "rgba(255, 255, 255, 0.15)",
  },
  borderRgba: {
    type: String,
    default: "rgba(255, 255, 255, 0.2)",
  },
});

const emit = defineEmits(["click"]);

const { sizeClass } = useSizeClass(props.size);

const themeClass = computed(() => {
  if (props.theme === "custom") return "btn-custom-color";
  return props.theme === "green"
    ? "btn-green"
    : props.theme === "blue"
    ? "btn-blue"
    : props.theme === "red"
    ? "btn-red"
    : "";
});

const bgColorStyle = computed(() => {
  if (props.theme === "custom") {
    console.log("自定义颜色", props.color);
    // 如果是hex需要转换成rgb
    if (colorType(props.color) === "hex") {
      const { r, g, b } = hexToRgb(props.color);
      console.log(r, g, b);
      return {
        "--bg-color": `rgba(${r},${g},${b}, 0.1)`,
        "--bg-color-border": `rgba(${r},${g},${b}, 0.2)`,
      };
    } else if (colorType(props.color) === "rgb") {
      const { r, g, b } = rgbParse(props.color);
      console.log("rrr", r, g, b);
      return {
        "--bg-color": `rgba(${r}, ${g}, ${b}, 0.1)`,
        "--bg-color-border": `rgba(${r}, ${g}, ${b}, 0.2)`,
      };
    } else if (!props.color && props.bgRgba && props.borderRgba) {
      console.log("使用自定义的rgba");
      return {
        "--bg-color": props.bgRgba,
        "--bg-color-border": props.borderRgba,
      };
    } else {
      console.log("默认红色1312");
      return {
        "--bg-color": "rgba(255, 100, 100, 0.1)",
        "--bg-color-border": "rgba(255, 100, 100, 0.2)",
      };
    }
  } else {
    return "";
  }
});

const handleClick = (event) => {
  emit("click", event);
};
</script>
<style scoped lang="scss">
.glass-btn-container {
  --hover-y: -2px;
  --glass-btn-border-color: rgba(255, 255, 255, 0.2);
  --glass-btn-bg-color: rgba(255, 255, 255, 0.15);
  .glass-btn {
    border: 1px solid var(--glass-btn-border-color);
    background: var(--glass-btn-bg-color);
    color: #ffffff;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 12px;
  }
  /* 正常状态效果 */
  .glass-btn:not(:active):not(:disabled) {
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  }

  /* 悬停状态 */
  .glass-btn:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(var(--hover-y));
  }

  /* 点击状态 */
  .glass-btn:active:not(:disabled) {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(0);
    box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.1);
  }

  /* 禁用状态 */
  .glass-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: rgba(100, 255, 150, 0.1);
    transform: none;
  }
  .btn-green {
    background: rgba(100, 255, 150, 0.15);
    border-color: rgba(100, 255, 150, 0.2);
  }
  .btn-blue {
    background: rgba(100, 150, 255, 0.1);
    border-color: rgba(100, 150, 255, 0.2);
  }
  .btn-red {
    background: rgba(255, 100, 180, 0.1);
    border-color: rgba(255, 100, 180, 0.2);
  }
  .btn-custom-color {
    background: var(--bg-color, rgba(255, 100, 100, 0.1));
    border-color: var(--bg-color-border, rgba(255, 100, 100, 0.2));
  }
}
</style>
