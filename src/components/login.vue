<template>
    <div>
        <p>
            <input type='text' placeholder="请输入用户名" v-model='username'>
        </p>
        <p><input placeholder="请输入密码" type="password" v-model='password'></p>
        <input type="button" value='登陆' @click='login'>
        <div>{{msg}}</div>
    </div>
</template>

<script>
    export default{
        name:'log',
        data(){
            return{
                username:null,
                password:null,
                msg:null

            } 
        },
        methods:{
            login(){
                var _this=this
                this.$axios.request({
                    url:'http://127.0.0.1:8000/api/V1/login/',
                    method:'post',
                    data:{'username':this.username,'pwd':this.password},
                    headers:{
                        'Content-Type':'application/json'
                    }
                }).then(function(arg){
                    if (arg.data.code===1000){
                        var userinfo = {'user':_this.username,'token':arg.data.token};
                        _this.$store.commit('SAVETOKEN',userinfo);
                        var url = _this.$route.query.bkurl;//保存登陆前的url的参数(必须字典query开头)
                        if (url){
                            _this.$router.push({path:url});

                        }
                        else{
                            _this.$router.push({name:'index'});}
                    }
                    else{
                        _this.msg=arg.data.error
                    }
        
                }).catch(function(arg){
                    console.log(arg)
                })

            }
        }

    }
</script>
<style type="text/css"></style>