<template>
    <div class='container'>
        <h1>深科技</h1>
        <div class='row'>
            <div class="col-md-9">
                <div v-for='article in allarticle' class='title'><router-link :to="{name:'deeparticle',params:{id:article.id}}">{{article.title}}</router-link><p>{{article.brief}}</p></div>


            </div>
        </div>

    </div>
</template>
<script>
    export default{
        name:'deeptech',
        data(){
            return {
               
            }
        },
        mounted(){
        
            this.$store.dispatch('getarticle',)

        },
        computed:{
            allarticle(){
                return this.$store.state.allarticle
            }

        },
        methods:{

        }
    }
</script>
<style type="text/css" scoped>
    .title{
        margin-top: 20px;
        font-size: 30px
    }
    .title p{
        font-size: 12px
    }
</style>