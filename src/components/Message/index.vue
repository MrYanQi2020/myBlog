<template>
  <div
    class="Message-container"
    :class="{
      chenggong: color === 'chenggong',
      shibai: color === 'shibai',
      xinxi: color === 'xinxi',
      jinggao: color === 'jinggao',
      show: show,hide:hide
    }"
  >
    <Icon :type="icon" />
    <span>{{ message }}</span>
  </div>
</template>


<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      type: true,
      show: false,
      hide: false,
    };
  },
  props: {
    icon: {
      type: String,
      require: true,
      default: "chenggong",
    },
    message: {
      type: String,
      require: true,
      default: "Messa阿斯蒂芬e",
    },
    color: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.chenggong {
  color: @chenggong;
  background-color: lighten(@chenggong, 25%);
  border: 1px solid lighten(@chenggong, 15%);
}
.shibai {
  color: @shibai;
  background-color: lighten(@shibai, 25%);
  border: 1px solid lighten(@shibai, 15%);
}
.xinxi {
  color: @xinxi;
  background-color: lighten(@xinxi, 25%);
  border: 1px solid lighten(@xinxi, 15%);
}
.jinggao {
  color: @jinggao;
  background-color: lighten(@jinggao, 25%);
  border: 1px solid lighten(@jinggao, 15%);
}
.Message-container {
  display: inline-flex;
  align-items: center;
  text-align: center;
  padding: 18px 30px;
  border-radius: 4px;
  border: 1px solid;
  font-size: 18px;
  .Icon-container {
    margin-right: 10px;
    font-size: 1.5em;
  }
}
  .Message-container {
    opacity:0;
    transition: 0.3s;
    transform: translateY(-60px);
  }
  .show {
    opacity:1;

    transform: translateY(0);
  }
  .hide {
    opacity:0;

    transform: translateY(-60px);
  }
</style>