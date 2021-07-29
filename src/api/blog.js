import ins from "./request";

//获取博客列表
async function blog(page=1,limit=10,categoryid=-1){
    try {
      const res = await ins.get('/api/blog',{
          params:{
              page,
              limit,
              categoryid,
          }
      });
        return res;
    } catch (error) {
        console.log(error);
    }
}

// 获取博客列表
async function blogtype(){
    try {
      const res = await ins.get('/api/blogtype');
        return res;
    } catch (error) {
        console.log(error);
    }
}
export {blogtype,blog};
