<script setup>
import neuButton from "./components/buttons/neumorphism/index.vue";
import glassButton from "./components/buttons/glass/index.vue";
import retroButton from "./components/buttons/retro/index.vue";
import marqueeButton from "./components/buttons/marquee/index.vue";
const handleClick = (e) => {
  console.log(e);
  alert("按钮被点击了");
};
</script>

<template>
  <div class="neu-wrapper">
    <!-- 白色背景区域 -->
    <div class="section bg-white">
      <h3 class="section-title">白色背景</h3>
      <div class="button-group">
        <!-- <neuButton theme="light" size="small">小按钮</neuButton>
        <neuButton theme="light">中按钮</neuButton>
        <neuButton theme="light" size="large">大按钮</neuButton>
        <neuButton theme="light" disabled>禁用按钮</neuButton> -->
      </div>
    </div>

    <!-- 深色背景区域 -->
    <div class="section bg-dark">
      <h3 class="section-title">深色背景</h3>
      <div class="button-group">
        <!-- <neuButton theme="dark" size="small">小按钮</neuButton>
        <neuButton theme="dark">中按钮</neuButton>
        <neuButton theme="dark" size="large">大按钮</neuButton>
        <neuButton theme="dark" disabled>禁用按钮</neuButton> -->
      </div>
    </div>

    <!-- 蓝色背景区域 -->
    <div class="section bg-blue">
      <h3 class="section-title">蓝色背景</h3>
      <div class="button-group">
        <!-- <neuButton theme="blue" size="small">小按钮</neuButton>
        <neuButton theme="blue">中按钮</neuButton>
        <neuButton theme="blue" size="large">大按钮</neuButton>
        <neuButton theme="blue" disabled>禁用按钮</neuButton> -->
      </div>
    </div>

    <!-- 绿色背景区域 -->
    <div class="section bg-green">
      <h3 class="section-title">绿色背景</h3>
      <div class="button-group">
        <!-- <neuButton theme="green" size="small">小按钮</neuButton>
        <neuButton theme="green">中按钮</neuButton>
        <neuButton theme="green" size="large">大按钮</neuButton>
        <neuButton theme="green" disabled>禁用按钮</neuButton> -->
      </div>
    </div>
    <div class="section bg-red">
      <h3 class="section-title">红色背景</h3>
      <div class="button-group">
        <!-- <neuButton @click="handleClick" theme="red" size="small"
          >小按钮</neuButton
        >
        <neuButton theme="red">中按钮</neuButton>
        <neuButton theme="red" size="large">大按钮</neuButton>
        <neuButton theme="red" disabled>禁用按钮</neuButton> -->
      </div>
    </div>
    <div class="section bg-orange">
      <h3 class="section-title">橙色背景</h3>
      <div class="button-group">
        <!-- <neuButton
          theme="custom"
          bgColor="#fff0e0"
          textColor="#b36b15"
          shadowLight="#ffffff"
          shadowDark="#e6c29e"
          >中按钮</neuButton
        > -->
      </div>
    </div>
    <div class="section bg-glass">
      <h3 class="section-title">玻璃风</h3>
      <div class="button-group">
        <!-- <glassButton>中按钮</glassButton>
        <glassButton size="large" theme="red">红按钮</glassButton>
        <glassButton theme="green">绿按钮</glassButton>
        <glassButton theme="blue">蓝按钮</glassButton> -->
        <glassButton
          theme="custom"
          bgRgba="rgba(255,0,0,0.1)"
          borderRgba="rgba(255,0,0,0.2)"
          >红按钮123</glassButton
        >
        <!-- <glassButton theme="custom" color="rgb(255,0,0)">红按钮</glassButton>
        <glassButton theme="custom" color="#FF0000">红按钮</glassButton>

        <glassButton disabled>中按钮</glassButton> -->
      </div>
    </div>
    <div class="section bg-retro">
      <h3 class="section-title">复古背景</h3>
      <div class="button-group">
        <retroButton size="large">大按钮</retroButton>
        <retroButton>中按钮</retroButton>
        <retroButton size="small">小按钮</retroButton>
        <retroButton disabled>小按钮</retroButton>
        <br />
        <retroButton theme="the">红按钮</retroButton>
        <retroButton theme="green">绿按钮</retroButton>
        <retroButton theme="blue">蓝按钮</retroButton>
        <retroButton
          theme="custom"
          bgColor="#ffd166"
          borderLight="#fff3b0"
          borderDark="#cca633"
          disabled
          >黄按钮</retroButton
        >
      </div>
    </div>
    <div class="section bg-retro">
      <h3 class="section-title">流光按钮</h3>
      <div class="button-group">
        <marqueeButton>按钮</marqueeButton>
        <marqueeButton
          linearGradient="linear-gradient(90deg, red, orange, blue, #03a9f4)"
          >大按钮</marqueeButton
        >
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.neu-wrapper {
  .section {
    padding: 30px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .section-title {
    color: #000;
    font-size: 18px;
    font-weight: 600;
  }

  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  .bg-white {
    background-color: #ffffff;
  }
  .bg-dark {
    background-color: #2a2e35;
  }
  .bg-blue {
    background-color: #d6e1ff;
  }
  .bg-green {
    background-color: #d6f5e5;
  }
  .bg-red {
    background-color: #ffe5e5;
  }
  .bg-orange {
    background-color: #fff0e0;
  }
  .bg-glass {
    /* 背景渐变增强玻璃效果 */
    // background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  }
  .bg-retro {
    background-color: #1a1a1a;
    background-image: linear-gradient(
        rgba(30, 30, 30, 0.8) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(30, 30, 30, 0.8) 1px, transparent 1px);
    .section-title {
      color: #fff;
    }
  }
}
</style>
