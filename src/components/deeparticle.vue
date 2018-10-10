<template>
    <div>
        <h1>{{article.title}}</h1>
        <div>{{article.content}}</div>
        <div class="comment">
            <ul class="list-group">
                <li v-for='comment in article.comment' class="list-group-item">
                    <div v-if='comment.p_node' class='well'><span>{{comment.p_node.name}}</span>{{comment.p_node.content}}</div>
                    <div><span>{{comment.name}}</span>{{comment.content}}</div>
                
                </li>
            </ul>
        </div>
        <div class='comment-zone'>
            <textarea placeholder="请输入评论吧" v-model='thiscomment'></textarea>
            <button @click='up_comment'>提交评论</button>

        </div>
        <div><span class="glyphicon glyphicon-star-empty" @click='collect_up'></span><span>收藏数{{collect_num}}</span><span>
        评论数{{comment_num}}</span></div>

        

    </div>

</template>
<script>
    export default{
        name:'deeparticle',
        data(){
            return{collect_num:null,
                thiscomment:null,
                comment_num:null,
                article_id:null,
                }
        },
        mounted(){
            this.initpage()
        },
        computed:{
            article(){
                return this.$store.state.articledetail
            }

        },
        methods:{
            initpage(){
                this.$store.dispatch('getarticledetail',this.$route.params.id);
            this.collect_num = this.$store.state.articledetail.collect_num
            this.comment_num=this.$store.state.articledetail.comment_num
            this.article_id = this.$store.state.articledetail.id
            },
            up_comment(){
                var _this = this;
                
                if (_this.$store.state.username==null){
                    alert('请先登录');
                }
                else{
                    _this.$axios.request({
                    url:'http://127.0.0.1:8000/api/V1/deeptech/'+_this.article.id+'/addcomment/',
                    method:'post',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    data:{
                        user:_this.$store.state.username,
                        comment:_this.thiscomment
                    }
                }).then(function(data){
                    console.log(data.data)
                    if(data.data.code==1000){
                        console.log('in')
                        _this.initpage()
                    }
                })
                }



            },
            collect_up(){
                var _this= this;
                this.$axios.request({
                    url:'http://127.0.0.1:8000/api/V1/deeptech/'+_this.article.id+'/collect/',
                    method:'get',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    params:{
                        user:_this.$store.state.username,
                    }
                }).then(function(data){
                    if (data.data.code===1000){
                        alert('收藏成功')
                        _this.initpage()
                    }
                })
            },

        },

    }
</script>
<style type="text/css">
    textarea{
        height: 200px;
        width: 400px
    }
</style>