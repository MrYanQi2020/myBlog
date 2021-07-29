<template>
  <div class="BlogList-container">
      <!-- <ul>
          <li>
              
          </li>
      </ul> -->
    <!-- 分页组件 -->
    <Pagination />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
export default {
  name: "BlogList",
  components: {
    Pagination,
  },
};
</script>

<style lang="less" scoped>

</style>