
import Home from "@/views/Home"
import About from "@/views/About"
import Blog from "@/views/Blog"
import Message from "@/views/Message"
import Project from "@/views/Project"

const routes=[
    {name:"Home", path: '/', component: Home },
    {name:"About", path: '/About'  , component: About },
    {name:"Blog", path: '/article'   , component: Blog },
    {name:"/CategoryBlog", path:"/article/cate/:categoryId",component:Blog},
    {name:"Message", path: '/Message', component: Message },
    {name:"Project", path: '/Project', component: Project },
 ]
 
 export default routes;