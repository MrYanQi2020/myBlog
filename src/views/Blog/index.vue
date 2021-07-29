<template>
  <div class="Blog-container"  v-loading="isLoading">
    <Layout>
      <template #center>
        <div class="center">
          <BlogList/>
        </div>
      </template>
      <template #right>
        <div class="right">
          BlogCategory
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import * as blogApi from "@/api/blog.js";// Mock数据
import fetchData from "@/mixins/fetchData.js";//获取数据函数
import Layout from "@/components/Layout"; //Layout组件
import BlogList from "./components/BlogList";//BlogList组件

export default {
  name:"Blog",
  mixins:[fetchData],

  components: {
    Layout,
    BlogList,
  },
  data() {
    return {
      lists: [
        {
          name: "1",
          isSelect: true,
          children: [
            {
              name: "1-1",
              isSelect: false,
              children: [
                {
                  name: "1-1-1",
                  isSelect: false,
                }
              ]
            },
            {
              name: "1-2",
              isSelect: false,
              children: [
                {
                  name: "1-2-1",
                  isSelect: true,
                },
                              {
                  name: "1-2-2",
                  isSelect: false,
                },
                              {
                  name: "1-2-3",
                  isSelect: false,
                }
              ]
            },
          ],
        },
        {
          name: "2",
          isSelect: false,
        }
      ],
    };
  },
  methods:{
    handleSelect(item){
      console.log(item);
    },
    async fetchData(){
    },
  },
  
};
</script>

<style lang="less" scoped>
  .Blog-container{
    width:100%;
    height:100%;
  }
</style>