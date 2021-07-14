<template>
  <div class="SiteAside-container">
    <Avatar :url="siteAside_msg.Avatar_url" :size="siteAside_msg.Avatar_size"/>
    <h1 class="nameId">{{nameId}}</h1>
    <Menu />
    <Contact />
    <p class="beian">{{beian}}</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";

import Contact from "./Contact";
import Menu from "./Menu";

export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
  data() {
    return {
      siteAside_msg: {
        Avatar_url:
          "https://img03.sogoucdn.com/app/a/100520093/8379901cc65ba509-45c21ceb904429fc-3cce4e108dc686e431b8d18fbf6e043d.jpg",
        Avatar_size: 185,
      },
      nameId:"颜七的小窝",
      beian:"i like u"
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var";

  .SiteAside-container{
    width:100%;
    height:100%;
    padding-top:20px;
    overflow:auto;
    .nameId{
      color:@white;
      font-family: sans-serif;
      font-size:24px;
      text-align: center;
      margin:0;
      margin-top:10px;
    }
    .Menu-container{
      margin-top:20px;
      font-size: 18px;
    }
    .Contact-container{
      margin-top: 50px;
      font-size:30px;
    }
    .Avatar-container{
      margin:0 auto;
    }
    .beian{
      color:darken(@words,10%);
      margin:40px 0;
    text-align: center;
      
    }
  }
</style>