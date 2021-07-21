import style from "./index.module.less";
import imgUrl from "@/assets/img/loading.svg";

// 判断元素是否存在
function getDom(el){
    return el.querySelector("img.loading");
}
// 创建img元素
function createDom(){
    const img = document.createElement("img");
    img.dataset.role="loading"
    img.src=imgUrl;
    img.classList = style.loading;
    return img;
}
const img = createDom();
export default function(el,binding){
    const isTrue = getDom(el);
    if(binding.value){
        if(!isTrue){
            el.appendChild(img);
        }
    }else{
        img.remove();
    }
}

