<template>

    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">课程列表</h3>
      </div>
      <div class="panel-body">
        <ul>
        <li v-for='(course,index) in getcourse'><router-link :to="{name:'detail',params:{id:course.id}}" ><img :src='course.course_img'></router-link>
          <p>课程级别{{course.level}}</p></li>
        </ul> 
      </div>
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
  computed:{
    getcourse(){
     return this.$store.state.allcourse
    },
    
  },
  methods:{
        
    }

}
</script>

<style scoped>
li{
  list-style: none;
  float: left;
  margin-left: 30px;
}
img{
  height: 144px;
  width: 288px;
}

</style>
