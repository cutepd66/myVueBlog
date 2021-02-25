<template>
    <div>
        <!-- 顶部背景图加文章标题部分 -->
        <div class="top-bg">
            <!-- 头部nav -->
            <Header></Header>
            <!-- 文章标题及信息 -->
            <div class="article-detail">
                <h3>{{currentData.title}}</h3>
                <div class="article-info">
                    <span>Posted by {{currentData.author}}</span>
                    <span>{{currentData.publishTime}}</span>
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-yanjing"></use>
                    </svg>
                    <span>{{currentData.views}}</span>
                </div>
            </div>
        </div>
        <!-- 文章详情内容 -->
        <div class="main-article">
            <div v-for="(item,key,i) in currentData.content" :key="i">
                <h3 v-if="key.substr(0,3)==='hhh'">{{item}}</h3>
                <p v-else-if="key.substr(0,3)==='ppp'">{{item}}</p>
                <img v-else-if="key.substr(0,3)==='iii'" :src="item">
            </div>
        </div>
        <!-- 留言按钮 -->
        <div class="liuyan-btn">
            <el-button type="danger" @click="showLiuyanDialog">留言</el-button>
        </div>

        <!-- 留言内容部分 -->
        <div class="liuyan">
            <div class="each-liuyan" v-for="(item,key,i) in currentData.liuyan" :key="i">
                <span>{{item.nick}}:</span>
                <span>{{item.content}}</span>
            </div>
        </div>


        <!-- 留言对话框 -->
        <el-dialog
        title="留言"
        :visible.sync="liuyanDialogVisible"
        width="50%" @close="liuyanDialogClosed">
        <el-form :model="liuyanForm" status-icon :rules="liuyanFormRules" ref="liuyanFormRef" label-width="100px">
        <el-form-item label="留言昵称" prop="Nick">
            <el-input v-model="liuyanForm.Nick" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="留言内容" prop="Content">
            <el-input v-model="liuyanForm.Content" autocomplete="off"></el-input>
        </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="liuyanDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="liuyanDialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
//导入Header组件
import Header from './Header'
//导入文章数据
import blogData from './blogData'
    export default {
        data(){
            return {
                //控制留言对话框的显示与隐藏
                liuyanDialogVisible:false,
                //留言的表单
                liuyanForm:{
                    Nick:'',
                    Content:''
                },
                //留言表单的验证规则对象
                liuyanFormRules:{
                    Nick:[
                        {required:true,message:'请输入留言昵称',trigger:'blur'}
                    ],
                    Content:[
                        {required:true,message:'请输入留言内容',trigger:'blur'}
                    ]
                },
                //当前文章的id
                id:window.sessionStorage.getItem('aid'),
                //所有文章数据
                blogData,
                //当前文章
                currentData:{}
            }
        },
        created(){
            //调用函数,拿到当前文章的数据，保存在currentData中
            this.getCurrentArticleData()
        },
        methods:{
            //点击按钮，弹出留言对话框
            showLiuyanDialog(){
                this.liuyanDialogVisible=true
            },
            //留言对话框的关闭
            liuyanDialogClosed(){
                //重置表单
                this.$refs.liuyanFormRef.resetFields()
            },
            //拿到当前文章的数据
            getCurrentArticleData(){
                // 根据id拿到当前文章的数据，保存在currentData中
                this.currentData = this.blogData.find(item=>{
                    if(item.id===this.id){
                        return item
                    }
                })
                console.log(this.currentData)
            }
        },
        components:{Header}
    }
</script>

<style scoped>
.top-bg{
    background: url(../assets/article.png);
    height: 380px;
    position: relative;
    box-sizing: border-box;
}
.article-detail{
    margin-left: 200px;
    color: #fff;
}
.article-detail h3{
    font-size: 32px;
    font-weight: normal;
    margin-bottom: 24px;
    border: 1px solid transparent;
    margin-top: 100px;
}
.article-info span{
    color: #999;
    font-family: Montserrat,sans-serif;
    font-size: 20px;
    margin-right: 10px;
}
.main-article{
    width: 875px;
    margin-left: 200px;
    border-top: 1px solid transparent;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
}
.main-article h3{
    margin-top: 32px;
    padding-bottom: 6px;
    font-size: 28px;
    margin-bottom: 6px;
}
.main-article p{
    line-height: 36px;
}
.main-article img{
    width: 80%;
    margin-top: 4px;
}
.liuyan-btn{
    margin-left: 1000px;
    margin-bottom: 20px;
}
.liuyan{
    margin-left: 200px;
    width: 875px;
}
.each-liuyan{
    padding: 10px 0px 10px 14px;
    border-bottom: 2px dashed #ccc;
    margin-bottom: 20px;
}
.each-liuyan :first-child{
    color: pink;
    font-size: 24px;
    font-weight: bold;
    margin-right: 4px;
}
.each-liuyan :nth-child(2){
    font-size: 22px;
    font-family:"楷体","楷体_GB2312";
}
.el-dialog{
    border-radius: 4px;
}
</style>