<template>
  <!-- 
       属性名	    含义	                                      类型	     必填	默认值
        src	        原始图片的路径	                              String	  是	  无
        placeholder	原始图片加载完成前的占位图片	               String	   是	   无
        duration	原始图片加载完成后，切换到原始图经过的毫秒数	Number	    否	   500 

        事件名    含义
        load     原图加载完成时触发
  -->
  <div class="imageLoader-container">
    <!-- 占位图 -->
    <img
      class="placeholder"
      :src="placeholder"
      :style="{ 'opacity': opacity, transition:`${duration}ms`,}"
    />
    <!-- 原图 -->
    <img class="image" :src="src" @load="imageLoad" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      opacity: 1,
    };
  },
  props: {
    src: {
      type: String,
      require: true,
    },
    placeholder: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      require: false,
      default: 500,
    },
  },
  methods: {
    imageLoad() {
      this.opacity = 0;
      return this.$emit("load");
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";

.imageLoader-container {
  overflow: hidden;
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
  .image {
    object-fit: cover;
    .position_fill();
  }
  .placeholder {
    .position_fill();
    filter: blur(12px);
    z-index: 10;
    transform:scale(1.1);
  }
}
</style>