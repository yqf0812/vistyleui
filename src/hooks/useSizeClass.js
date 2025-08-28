import { computed } from "vue";

export function useSizeClass(size) {
  const sizeClass = computed(() => {
    return size === "small"
      ? "btn-small"
      : size === "large"
      ? "btn-large"
      : "btn-medium";
  });
  return {
    sizeClass,
  };
}
