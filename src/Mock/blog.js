import Mock from "mockjs";
import qs from "querystring";

// 博客分类
Mock.mock('/api/blogtype', 'get', {
    code: 0,
    msg: "获取数据失败",
    data: [
        {
            id: 1,
            name: "分类1",
            articleCount: 10, //该分类下文章的数量
            order: 1
        },
        {
            id: 2,
            name: "分类2",
            articleCount: 10, //该分类下文章的数量
            order: 2
        },
        {
            id: 3,
            name: "分类3",
            articleCount: 10, //该分类下文章的数量
            order: 3
        }
    ]

}
)

// 博客列表
Mock.mock(/^\/api\/blog(\?.+)?$/,'get',function(option){
    const query = qs.parse(option.url);

    return Mock.mock({
        code:0,
        msg:"",
        data:{
            "total|2000-3300":0,
            [`rows|${query.limit||10}`]:[{
                id:'@guid',
                title:'@ctitle',
                description:'@cparagraph(1,10)',
                category:{
                    "id|1-10":0,
                    name:"分类@id",
                },
                "scanNumber|0-3000":0,
                "commentNumber|0-30":30,
                thumb:Mock.Random.image("300x250","#fff","#000","Random image"),

            }]
        }
    })
})