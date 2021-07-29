<template>
  <div id="app">
    <Layout>
      <!-- aside -->
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>

      <template #center>
        <div class="main">
          <RouterView />
        </div>
      </template>
      <template #right> </template>
    </Layout>
  </div>
</template>

<script>
import SiteAside from "@/components/SiteAside";
import Layout from "@/components/Layout";
import ImageLoader from "@/components/ImageLoader";

export default {
  name: "App",
  components: {
    Layout,
    SiteAside,
    ImageLoader,
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";

#app {
  .position_fill(fixed);
}
.aside {
  width: 260px;
  height: 100%;
  background-color: @bag;
}
.main {
  height: 100%;
}
</style>
