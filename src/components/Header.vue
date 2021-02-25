<template>
    <div>
        <div class="top-blog">
            <div>
                <span>blog</span>
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-taiyang"></use>
            </svg>
            </div>
            <div>
            <span><router-link to="/about">关于</router-link></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
            }
        },
        methods:{
        }
    }
</script>

<style scoped>
.top-blog{
    display: flex;
    padding: 20px;
    background-color: rgba(0, 0, 0, .4);
    opacity: .8;
}
.top-blog span,.top-blog span a{
    color: #fff;
    font-size: 24px;
    margin: 16px;
    z-index: inherit;
}
.top-blog span:hover{
    cursor: pointer;
}
.icon{
    font-size: 24px;
    transform: translate(-26px,-6px);
}
</style>