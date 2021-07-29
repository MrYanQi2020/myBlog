export default{
    data(){
        return{
            data: [],
            isLoading:true,
        }
    },
    async created() {
        this.data = await this.fetchData();
        this.isLoading = false;
    },
}