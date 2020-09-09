<template>
  <div>
    <TypeNav></TypeNav>
    <Container></Container>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <!-- <Floor></Floor> -->
    <Brand></Brand>
  </div>
</template>

<script>
import Container from './Container'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import { mapState } from 'vuex'
export default {
  name: 'Home',

  components:{
    Container,
    Recommend,
    Rank,
    Floor,
    Like,
    Brand
  },
  mounted(){
    this.getFloorList()
  },
  methods:{
    getFloorList(){
      this.$store.dispatch('getFloorList')
    }
  },
  computed: {
    ...mapState({
      FloorList:state=>state.home.floorList
    })
  },
}
</script>

<style scoped lang='less'>

</style>