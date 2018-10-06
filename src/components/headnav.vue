<template>
  <div class="main">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand">luffy学院</a>
        </div>

       
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
          <ul class="nav navbar-nav">
            <li v-for='(tag,index) in tags' :class="{active:tag.id-1==currentindex}" @click='changeindex(tag.id)'>
                <router-link :to="tag.url">{{tag.title}}</router-link>
            </li>
            <li v-if='this.$store.state.usertoken' class='dropdown-menu-right'><a>{{this.$store.state.username}}</a></li>
            <li v-if='this.$store.state.usertoken' class='dropdown-menu-right'><a @click='logout'>注销</a></li>
            <li v-else><router-link to='/login' class='dropdown-menu-right'>登陆</router-link></li>

          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

  </div>
</template>

<script>
export default {
  name: 'Vhead',
  data () {
    return {
        prifix:null,
        tags:[
        {id:1,title:'首页',url:'/index'},
        {id:2,title:'免费课程',url:'/detail'},
        {id:3,title:'公开课',url:'/openclass'},
        {id:4,title:'深科技',url:'/deeptech'}
        ],
        currentindex:0
    }
  },
  methods:{
    changeindex(id){
      this.currentindex = id-1
    },
    logout(){
      this.$store.commit('CLEAERTOKEN')
    }

  },
  created(){
      for (var i=0;i<this.tags.length;i++){
        if (this.tags[i].url==this.$route.path){
          this.currentindex =i;
          return;
        }
      }
    },
  computed:{
    
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
