<template>
  <div class="Menu-container" >
    <RouterLink
      :to="{ name: item.name }"
      :exact="item.exact"
      
      active-class="active"
      exact-active-class=""
      class="Menu-list"
      :class="{ MenuListhover: handleclick(item.name, item.children) }"
      v-for="item in list"
      :key="item.name"
    >
      <Icon :type="item.icon" />
      <span>{{ item.text }}</span>
    </RouterLink>
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
      list: [
        {
          name: "Home",
          icon: "home",
          text: "首页",
          exact: true,
        },
        {
          name: "Blog",
          icon: "wenzhang",
          text: "文章",
          exact: false,
        },
        {
          name: "About",
          icon: "about",
          text: "关于我",
          exact: true,
        },
        {
          name: "Project",
          icon: "code",
          text: "项目&效果",
          exact: true,
        },
        {
          name: "Message",
          icon: "liuyan",
          text: "留言板",
          exact: true,
        },
      ],
    };
  },
  methods: {
    handleclick(path, children) {
      if (path && children && location.pathname.includes(path)) {
        return true;
      }
      if (location.pathname === path) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";

.Menu-container {
  display: flex;
  flex-direction: column;
  .Menu-list {
    padding: 12px 0;
    padding-left: 55px;
    color: @words;
    &:hover,
    &.active {
      color: @wordsActive;
      background: lighten(@bag, 10%);
    }
    .Icon-container {
      margin-right: 14px;
    }
  }
  .MenuListhover {
    color: @wordsActive;
    background: lighten(@bag, 10%);
  }
}
</style>