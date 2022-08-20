<template>
  <div>
    <NavBar class="home-nav">
      <template v-slot:right></template>
    </NavBar>
    <!--    <div v-for="item in banners">-->
    <!--      <img :src="item" alt="">-->
    <!--    </div>-->
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultiData} from "@/ntework/home";

export default {
  name: "Home",
  components: {
    NavBar
  },
  data() {
    return {
      banners: []
    }
  },
  created() {
    // 1. 请求多个数据
    getHomeMultiData().then(res => {
      console.log(res);
    })
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
}

img {
  width: 20px;
  height: 20px;
}
</style>
