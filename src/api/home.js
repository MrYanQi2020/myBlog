import ins from "./request";
async function home(){
    try {
        const res = await ins.get("/api/home");
        // res && this.$showMessage({
        //     content: "成功",
        //     type: "success",
        //     container: this.$refs.container,
        // });
        return res;
      } catch (error) {
        console.log(error);
    }
}
export default home;
