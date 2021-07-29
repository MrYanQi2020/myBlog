<template>
  <div v-if="pageNumber > 1" class="pagination-container">
      
    <a @click="handleClike(current-1)" :class="{ disabled: current === 1 }">&lt;</a>
    <a
      v-for="(v, i) in numbers"
      :key="i"
      :class="{ active: current === v }"
      @click="handleClike(v)"

      >{{ v }}</a
    >
    <a @click="handleClike(current+1,pageNumber)" :class="{ disabled: current === pageNumber }">&gt;</a>
  </div>
</template>

<script>
export default {
  props: {
    //当前页码
    current: {
      type: Number,
      require: false,
      default: 6,
    },
    //总数据量
    total: {
      type: Number,
      require: false,
      default: 100,
    },
    //页容量
    limit: {
      type: Number,
      require: false,
      default: 10,
    },
    //可见页码数
    visibleNumber: {
      type: Number,
      require: false,
      default: 5,
    },
  },
  computed: {
    //实际页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    numbers() {
      let arr = [];
      for (let index = this.visibleMin; index <= this.visibleMax; index++) {
        arr.push(index);
      }
      return arr;
    },
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
  },
  methods:{
    handleClike(newPage){
      if(newPage<1){
        newPage = 1;
        return;
      }else if(newPage>this.pageNumber){
        newPage = this.pageNumber;
        return;
      }else if(newPage === this.current){
        return;
      }
      this.$emit("pageChange",newPage)
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";

.pagination-container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    width: 20px;
    height: 20px;
    margin: 0 10px;
    text-align: center;
    background-color: @bg;
    color: @words;
    padding: 12px;
    border-radius: 4px;
    cursor: pointer;
    &.active {
      background-color: @bgActive;
      color: @wordsActive;
    }
    &:hover {
      color: @bgActive;
    }
    &.disabled {
      color: @disabled;
      cursor: not-allowed;
    }
  }
}
</style>