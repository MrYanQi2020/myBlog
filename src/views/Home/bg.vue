<template>
  <div class="bg-container">
    <div class="img">
        <ImageLoader @load="handleLoad" :src="src" :placeholder="placeholder" />
    </div>
    <div class="container">
      <div class="title" ref="title">{{ title }}</div>
      <div class="descr" ref="descr">{{ descr }}</div>
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";

export default {
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descrWidth: 0,
      titleHeight: 0,
      descrHeight: 0,
    };
  },
  props: ["title", "descr", "src", "placeholder"],
  methods: {
    handleLoad() {
      this.$refs.descr.style.width = 0;
      this.$refs.title.style.width = 0;
      this.$refs.descr.style.height = this.descrHeight + "px";
      this.$refs.title.style.height = this.titleHeight + "px";
      //   强制刷新
      this.$refs.title.clientWidth;

      this.$refs.descr.style.width = this.descrWidth + "px";
      this.$refs.title.style.width = this.titleWidth + "px";
      this.$refs.title.style.opacity = 1;
      this.$refs.descr.style.opacity = 1;
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descrWidth = this.$refs.descr.clientWidth;

    this.titleHeight = this.$refs.title.clientHeight;
    this.descrHeight = this.$refs.descr.clientHeight;
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/mixin";
@import "~@/style/var";

.bg-container {
  width: 100%;
  height: 100%;
  position: relative;
  .img{
      width: 100%;
      height:100%;
      overflow: hidden;
  }
  .container {
    .self-center();
    color: @white;
    text-shadow: 1.5px 1.5px 0 rgba(0, 0, 0, 0.5),
      -1.5px -1.5px 0 rgba(0, 0, 0, 0.5);
    left: 50px;
    transform: translate(0, -50%);
    > * {
      opacity: 0;
      overflow: hidden;
      white-space: nowrap;
    }
    .title {
      display: inline-block;
      font-size: 2em;
      transition: 1s;
    }
    .descr {
      margin-top: 10px;
      font-size: 1em;
      color: darken(@white, 15%);
      transition: 2s 1s;
    }
  }
}
</style>