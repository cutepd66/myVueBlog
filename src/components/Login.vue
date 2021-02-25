<template>
    <div class="login-container">
        <!-- 登录对话框 -->
        <div class="login-box">
            <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" label-width="100px">
            <el-form-item label="用户名" prop="uname">
                <el-input v-model="loginForm.uname"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:120px;height:45px">登录</el-button>
                <el-button type="info" style="width:120px;height:45px">重置</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                //登录表单
                loginForm:{
                    uname:'',
                    password:''
                },
                //登录表单的验证规则
                loginFormRules:{
                    uname:[
                        {required:true,message:'请输入用户名',trigger:'blur'}
                    ],
                    password:[
                        {required:true,message:'请输入密码',trigger:'blur'},
                        {min:6,max:15,message:'密码长度在6到15个字符之间',trigger:'blur'}
                    ]
                }
            }
        }
    }
</script>

<style scoped>
.login-container{
    /* background-image: url(../assets/login.png); */
    background-color: #2b4b6b;
    height: 100vh;
}
.login-box{
    width: 450px;
    height: 300px;
    background-color: rgb(252, 237, 239);
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 3px;
    padding-right:36px;
    padding-top: 70px;
    text-align: center;
}
</style>