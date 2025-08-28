export function hexToRgb(hex) {
  // 移除可能存在的#号
  hex = hex.replace(/^#/, "");

  // 处理3位缩写的16进制颜色（如#f00）
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // 解析RGB三个通道的值
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // 返回RGB对象或字符串格式
  return {
    r,
    g,
    b,
  };
  // 或者返回字符串格式: `rgb(${r}, ${g}, ${b})`
}

// 判断传过来的是16进制颜色还是rbg颜色，或者rgba颜色
export function colorType(color) {
  const hexReg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
  const rgbReg = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/; // rgb(255, 255, 255)

  const rgbaReg =
    /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0|1|0\.\d+)\)$/; // rgba(255, 255, 255, 0.5)
  if (hexReg.test(color)) {
    return "hex";
  } else if (rgbReg.test(color)) {
    return "rgb";
  } else if (rgbaReg.test(color)) {
    return "rgba";
  } else {
    return "";
  }
}
// 如果传过来的是rbg字符串，将rbg中的r,g,b分别解析出来
export function rgbParse(rgb) {
  // 提取RGB值
  const rgbValues = rgb.match(/\d+/g); // 提取RGB值
  const r = parseInt(rgbValues[0]);
  const g = parseInt(rgbValues[1]);
  const b = parseInt(rgbValues[2]);
  return {
    r,
    g,
    b,
  };
}
