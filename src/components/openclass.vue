<template>
    <div>
        {{msg}}
    </div>
</template>
<script>
    export default{
        data(){
            return {msg:null}
        },
        mounted(){
            this.initpage()
        },
        methods:{
            initpage(){
                var _this=this;
                this.$axios.request({
                    url:'http://127.0.0.1:8000/api/V1/openclass/',
                    method:'get',
                    params:{
                        token:_this.$store.state.usertoken
                    }
                }).then(function(res){
                    if(res.data.code===1002){
                
                        _this.msg =res.data.error;}
                    else{
                        _this.msg = res.data.data
                    }

                    
                }).catch(function(res){
                    _this.msg= res.response.data.error;
                })


            }
        }

        
    }
</script>
<style type="text/css"></style>