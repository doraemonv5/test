<template>
  <div id="app">
    <Vhead></Vhead>
    <router-view/>
  </div>
</template>

<script>
import Vhead from '@/components/headnav'
export default {
  name: 'App',
  components:{
    Vhead
  },
  mounted(){
    console.log('mounted')
    this.$store.dispatch('getcourse')

  }
}
</script>

<style>

</style>
