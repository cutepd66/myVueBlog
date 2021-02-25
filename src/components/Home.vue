<template>
    <div class="main-container">
        <!-- 顶部背景图部分 -->
        <div class="top-bg">
            <!-- 头部nav -->
            <Header></Header>
            <!-- 中间欢迎区域 -->
            <div class="top-welcome">
                <span>欢迎您！</span>
                <p>{{currentMsg+' |'}}</p>
            </div>
        </div>
        <!-- 文字列表部分 -->
        <div class="main-article">
            <div class="each-article" v-for="item in blogData" :key="item.id">
                <a @click.prevent="toArticleDetial(item.id)">
                    <h3>{{item.title}}</h3>
                    <p v-if="item.content.desc">{{item.content.desc.substr(0,100)}}</p>
                </a>
                <div class="article-info">
                    <span>Posted by {{item.author}}</span>
                    <span>{{item.publishTime}}</span>
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-yanjing"></use>
                    </svg>
                    <span>{{item.views}}</span>
                </div>
            </div>
            <div class="article-footer">
                <span>我是有底线的...</span>
        </div>
        </div>

        <!-- 回到顶部 -->
        <el-backtop target=".main-container" :bottom="100">
            <div
            style="{
                height: 100%;
                width: 100%;
                background-color: #f2f5f6;
                box-shadow: 0 0 6px rgba(0,0,0, .12);
                text-align: center;
                line-height: 40px;
                color: #1989fa;
            }"
            >
            UP
            </div>
        </el-backtop>

    </div>
</template>

<script>
//导入顶部nav组件
import Header from './Header'
//导入文章数据
import blogData from './blogData'
    export default {
        data(){
            return {
                //当前欢迎部分的内容
                currentMsg:'',
                //完整的欢迎部分的内容
                hiMsg:'Hi,欢迎来到可爱的胖丁的博客!',
                //标志一句信息是否完了
                isWan:false,
                //文章数据
                blogData
            }
        },
        created(){
            this.welAnimation()
        },
        methods:{
            //实现欢迎内容的动画
            welAnimation(){
                //截取的结束的索引
                let i=1
                //标志是否倒过来读取
                let flag=false
                setInterval(()=>{
                    i<=this.hiMsg.length&&i>=0?this.currentMsg=this.hiMsg.slice(0,i):flag=!flag
                    flag?i--:i++
                },200)
            },
            //点击文章标题或文章简介，跳转到文章详情请组件页面
            toArticleDetial(id){
                //将当前点击的文章id保存到sessionStrage中
                 window.sessionStorage.setItem('aid',id)

                //编程式导航到文章详情页
                this.$router.push('/article')
            }
        },
        components:{
            Header
        }
    }
</script>

<style scoped>
.top-bg{
    background: url(../assets/bg.png);
    height: 380px;
    position: relative;
    box-sizing: border-box;
}
.top-welcome{
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
}
.top-welcome span{
    font-size: 36px;
}
.top-welcome p{
    margin: 20px;
}
.main-article{
    width: 670px;
    margin-left: 300px;
}
.each-article{
    border-bottom: 0.2px solid #ddd;
}
/* 上面用router-link，这里写a才可以，写router-link反而不能变色了。。 */
.each-article a :hover{
    color: #0085A1!important;
    cursor: pointer;
}
.each-article h3{
    font-size: 21px;
    color: #000;
    margin: 30px 0px;
}
.each-article p{
    color: #888;
    font-size: 14px;
    margin-bottom: 24px;
    /* 让多余的文字显示为省略号，三缺一不可 */
    /* overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; */
}
.article-info{
    color: #888;
    margin-bottom: 20px;
}
.article-info span {
    margin-right: 10px;
}
.article-footer{
    text-align: center;
    margin: 20px 0px;
    color: #888;
}
/* 他妈的就是垃圾玩意，如果无效，需要给那个盒子添加下面这些样式 */
.main-container{
    height: 100vh;
    overflow-x: hidden;
}
</style>