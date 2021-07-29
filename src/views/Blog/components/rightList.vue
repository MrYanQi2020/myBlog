<template>
  <ul class="rightList-container">
    <li v-for="(item, i) in list" :key="i">
      <span :class="{ select: item.isSelect }" @click="handleClick(item)">
        {{ item.name }}</span
      >

      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      this.$emit("select", item);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var";
.rightList-container {
  width:100%;
  color: initial;
  padding: 0;
  margin: 0;
  .select {
    color: @primary;
    font-weight: bold;
  }
  li {
    list-style: none;
    padding: 0;
    margin: 0;
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
  }
  > li {
    margin-left: 1em;
  }
}
</style>