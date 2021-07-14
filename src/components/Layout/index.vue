<template>
  <div class="Layout-container">
    <!-- 左边栏区域，宽度适应内容，溢出隐藏-->
    <div class="left">
      <slot name="left"></slot>
    </div>
    <!-- 主区域，宽度占满剩余空间，溢出隐藏 -->
    <div class="center">
      <slot name="center"></slot>
    </div>
    <!-- 右边栏区域，宽度适应内容，溢出隐藏 -->
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.Layout-container {
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  .left,
  .right {
    overflow: hidden;
    flex: 0 0 auto;
    overflow: hidden;
  }
  .center {
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>