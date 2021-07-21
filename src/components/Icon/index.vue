<template>
  <i
    class="Icon iconfont Icon-container"
    :class="iCor"
  >
  </i>
</template>

<script>
export default {
  data() {
    return {
    //字体映射
      icon: {
        home: "icon-shouye",
        qq:"icon-qq",
        weixin:"icon-weixin",
        github:"icon-github1",
        liuyan:"icon-liuyan",
        code:"icon-code",
        about:"icon-about",
        wenzhang:"icon-houtaiguanli-fabuwenzhang",
        warn:"icon-jinggao",
        error:"icon-shibai",
        info:"icon-xinxi",
        success:"icon-success",
        arrow_up:"icon-jiantoushang",
        arrow_down:"icon-jiantouxia"
      },
    };
  },
  props: {
    type: {
      type: String,
      required: false,
    },
  },
  computed: {
    //字体类名
    iCor() {
        return this.icon[this.type];
    },
  },
};
</script>

<style scoped>
    @import "//at.alicdn.com/t/font_2658846_6ch9jt5jsu4.css";
    @import "//at.alicdn.com/t/font_2672268_8wklgum1f0c.css";
    .Icon-container{
      font-size:inherit;

    }
</style>