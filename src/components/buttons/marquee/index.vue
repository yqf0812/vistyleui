<template>
  <div class="marquee-btn-container">
    <button
      class="marquee-btn"
      :class="[sizeClass]"
      :disabled="disabled"
      :style="colorStyle"
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
  linearGradient: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["click"]);
const handleClick = (event) => {
  emit("click", event);
};
const { sizeClass } = useSizeClass(props.size);
const colorStyle = computed(() => {
  if (props.linearGradient) {
    return {
      "--linear-gradient": props.linearGradient,
    };
  }
});
</script>

<style lang="scss" scoped>
.marquee-btn-container {
  .marquee-btn {
    border: none;
    background: var(
      --linear-gradient,
      linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4)
    );
    background-size: 400%;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    outline: none;
    font-size: 14px;
    border-radius: 12px;
    position: relative;
    z-index: 1;
  }
  .marquee-btn:hover:not(:disabled) {
    animation: identifier 8s linear infinite;
  }
  .marquee-btn::before {
    content: "";
    position: absolute;
    inset: -5px;
    z-index: -1;
    background: var(
      --linear-gradient,
      linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4)
    );
    background-size: 400%;
    opacity: 0;
  }
  .marquee-btn:hover:not(:disabled)::before {
    filter: blur(10px);
    opacity: 1;
    animation: identifier 8s linear infinite;
  }
  .marquee-btn:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .marquee-btn:active:not(:disabled) {
    transform: scale(0.9);
  }
  @keyframes identifier {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 400%;
    }
  }
}
</style>
