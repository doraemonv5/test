<template>
  <div>
    <h1>{{getcoursedesc.name}}</h1>
      <h1>口号:{{getcoursedesc.slogon}}</h1>
      <h4>为啥要学：{{getcoursedesc.why_study}}</h4>
    <div>
      <h4>推荐课程</h4>
      <ul>
          <li v-for='course in getcoursedesc.recommend_courses'><a @click='changepage(course.id)'>{{course.name}}</a></router-link></li>
      </ul>
    </div>
    <div>
      <h1>课程章节</h1>
      <ul>
          <li v-for='(content,index) in getcoursedesc.chapter'>{{content.chapter}}---{{content.name}}</li>
      </ul>
    </div>
    <div>
      <h1>课程周期收费</h1>
      <li v-for='content in getcoursedesc.pricepolicy'>
        {{content.period}}--{{content.price}}
      </li>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    }

  },
  created(){
    this.$store.dispatch('getcoursedesc',this.$route.params.id)
  },
  computed:{
    getcoursedesc(){
        return this.$store.state.couresdesc
    }
  }
  ,
  methods:{
    changepage(id){
        this.$store.dispatch('getcoursedesc',id) //重行获取资源不能改变url路径
        this.$router.push({name:'detail',params:{id:id}}) //页面重定向改变路径

    }
  }
}
</script>

<style scoped>

</style>
