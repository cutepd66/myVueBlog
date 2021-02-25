<template>
    <div class="container">
        <div class="resume">
            <div class="top-info">
            <!-- 头像部分 -->
            <div class="avatar">
                <img src="../assets/avatar.png">
            </div>
            <!-- 姓名部分 -->
            <div class="my-name">
                <h3>姓名</h3>
                <span>梁锦辉</span>
            </div>
            <!-- 中间的竖线 -->
            <div class="shuxian"></div>
            <!-- 电话邮箱之类 -->
            <ul class="base-info">
                <li>
                    <span class="iconfont">&#xe61b;</span>
                    <span>年龄:</span>
                    <span>22</span>
                </li>
                <li>
                    <span class="iconfont">&#xe60b;</span>
                    <span>电话:</span>
                    <span>17777594920</span>
                </li>
                <li>
                    <span class="iconfont">&#xe676;</span>
                    <span>邮箱:</span>
                    <span>cutepd66@foxmail.com</span>
                </li>
                <li>
                    <span class="iconfont">&#xe660;</span>
                    <span>现居:</span>
                    <span>广西柳州</span>
                </li>
            </ul>
            </div>

            <!-- 个人信息内容 -->
            <div class="my-info">
                <div class="edu-info">
                    <div>
                        <span class="iconfont">&#xe628;</span>
                        <span>大学经历</span>
                    </div>
                    <p><span>就读大学:</span>广西科技大学</p>
                    <p><span>所学专业:</span>数字媒体技术专业</p>
                    <p><span>主修:</span>C语言、面向对象程序设计、数据结构、Web技术、移动游戏开发、Unity游戏开发、计算机图形学</p>
                </div>
                <div class="edu-info">
                    <div>
                        <span class="iconfont">&#xe739;</span>
                        <span>个人情况</span>
                    </div>
                    <p>本人目前大三，学习过一些前端的技术，做过一些完整项目，学习过程做过一些完整页面。</p>
                    <p>大一大二学过C语言、C++、Python等编程语言，了解计算机方面的知识，包括计算机网络、操作系统、计算机常识等等，会使用word、ppt常用办公软件。</p>
                    <p>大二大三开始学习web前端方面的知识，包括html、css、javascript、ajax,了解并会使用jq框架。会使用vue框架来进行开发，会组件化开发，了解element-ui、axios、fetch，了解lodash、echarts等。后端方面，了解nodejs，及其框架express，了解mongoDB数据库的基础操作，包括增删改查啥的。</p>
                </div>
                <div class="edu-info">
                    <div>
                        <span class="iconfont">&#xe628;</span>
                        <span>做过的完整的项目</span>
                    </div>
                    <p>利用html、css、js、jq，ajax，nodejs、mongoDB数据库等做过一个简单的多人博客系统，github链接:<span><a href="https://github.com/cutepd66/myBlog">https://github.com/cutepd66/myBlog</a></span></p>
                    <p>利用vue、element-ui等做过一个简单的个人博客网站，github链接:<span><a href="https://github.com/cutepd66/myVueBlog">https://github.com/cutepd66/myVueBlog</a></span></p>
                    <p>在学习过程中做过一个vue后台电商管理项目，vue脚手架创建，使用到vue组件化开发、element-ui、echarts、lodash、axios等，码云链接:<span><a href="https://gitee.com/cutepd66/my_vue_shop">https://gitee.com/cutepd66/my_vue_shop</a></span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.container{
    padding-top: 2px;
    height: 100%;
    background-color: pink;
}
.resume{
    margin: 0 auto;
    width: 900px;
    background-color: #fff;
}
.top-info{
    position: relative;
    background:url(../assets/about-bg.png) no-repeat top center;
    background-size: contain;
    height: 275px;
    margin-bottom: 30px;
}
.avatar img{
    position: absolute;
    top: 50px;
    left: 60px;
    width: 150px;
    height: 150px;
    border: 6px solid #fff;
}
.base-info{
    width: 300px;
    height: 210px;
    top: 50px;
    right: 50px;
    position: absolute;
    display: flex;
    flex-direction: column;
}
.base-info li{
    align-items: center;
    line-height: 40px;
}
.base-info li span{
    margin-right: 10px;
}
.shuxian{
    width: 6px;
    height: 170px;
    position: absolute;
    background-color: #2c5eaa;
    right: 400px;
    top: 50px;
}
.my-name{
    position: absolute;
    top: 72px;
    left: 300px;
}
.my-name h3{
    font-size: 32px;
    margin-bottom: 10px;
    letter-spacing: 1em;
}
.my-name span{
    font-size: 32px;
    font-weight: bold;
    color: #2c5eaa;
    letter-spacing: 10px;
}
.my-info{
    padding: 0 100px;
    font-weight: 540;
}
.edu-info div{
    background-color: #73c5ff;
    color: #fff;
    font-weight: bold;
    padding-left: 10px;
    font-size: 24px;
    height: 50px;
    line-height: 50px;
    margin-bottom: 10px;
}
.edu-info .iconfont{
    font-size: 24px;
}
.edu-info span{
    margin-right: 10px;
}
.edu-info p{
    font-size: 18px;
    line-height: 40px;
    text-indent: 2em;
}
</style>