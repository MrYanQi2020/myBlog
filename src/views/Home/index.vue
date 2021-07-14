<template>
  <div class="Home-container" ref="parentsContainer" @wheel="handleWheel">
    <!-- 背景 -->
    <ul class="bg" :style="{ marginTop }" @transitionend="handleTransition">
      <li v-for="item in data" :key="item.id">
        <Bg
          :title="item.title"
          :descr="item.description"
          :src="item.bigImg"
          :placeholder="item.midImg"
        />
      </li>
    </ul>
    <!-- 上下切换箭头 -->
    <div
      v-show="index >= 1"
      class="arrow arrow_top"
      @click="switchTo(index - 1)"
    >
      <Icon type="arrow_up" />
    </div>
    <div
      v-show="index < data.length - 1"
      class="arrow arrow_down"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrow_down" />
    </div>
    <!-- 右侧切换圆点 -->
    <ul class="dot">
      <li
        :class="{ active: index === i }"
        v-for="(item, i) in data"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import home from "@/api/home";
import Icon from "@/components/Icon";
import Bg from "./bg";

export default {
  name: "Home",
  components: {
    Icon,
    Bg,
  },

  // 数据
  data() {
    return {
      data: [],
      index: 0, //轮播索引
      parentsContainerHeight: 0, //轮播父容器高度
      switching: false,
    };
  },
  computed: {
    marginTop() {
      return -(this.index * this.parentsContainerHeight) + "px";
    },
  },
  // 方法
  methods: {
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY > 0 && this.index < this.data.length - 1) {
        this.index++;
        this.switching = true;
      } else if (e.deltaY < 0 && this.index > 0) {
        this.index--;
        this.switching = true;
      }
    },
    handleResize() {
      this.parentsContainerHeight = this.$refs.parentsContainer.clientHeight;
      console.log("change");
    },
    handleTransition() {
      this.switching = false;
    },
  },
  // 生命周期
  async created() {
    this.data = await home();
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var";
@import "~@/style/mixin";

.Home-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  li {
    cursor: pointer;
  }
  //  背景样式
  .bg {
    width: 100%;
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    transition: 0.5s;
    li {
      width: 100%;
      height: 100%;
      background-color: blueviolet;
    }
  }

  //  上下切换箭头样式
  .arrow {
    .self-center();
    @size: 25px;
    transform: translateY(0);
    font-size: 2.5em;
    color: @arrow;
    z-index: 1000;
    //  上箭头
    &.arrow_top {
      top: @size;
      animation: arrow_top 1.5s infinite;
    }
    // 下箭头
    &.arrow_down {
      top: auto;
      bottom: @size;
      animation: arrow_down 1.5s infinite;
    }
  }
  //  右侧切换圆点样式
  .dot {
    z-index: 1000;

    @size: 25px;
    .self-center();
    left: auto;
    right: @size;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      width: 7px;
      height: 7px;
      border: 1px solid @white;
      border-radius: 50%;
      margin: 14px 0;
      &.active {
        background-color: @white;
      }
    }
  }
}

@kf_size: 5px;
@keyframes arrow_top {
  0% {
    transform: translateY(-@kf_size);
  }
  50% {
    transform: translateY(@kf_size);
  }
  100% {
    transform: translateY(-@kf_size);
  }
}
@keyframes arrow_down {
  0% {
    transform: translateY(@kf_size);
  }
  50% {
    transform: translateY(-@kf_size);
  }
  100% {
    transform: translateY(@kf_size);
  }
}
</style>