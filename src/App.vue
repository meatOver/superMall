<template>
  <div id="app">
    <router-view/>
    <Tab-bar>
      <tab-bar-item v-for="(item,key) in TabBar" class="tab">
        <template v-slot:item-icon>
        <img :src="item">
        </template>
        <template v-slot:item-text>
        <div>{{ key }}</div>
        </template>
      </tab-bar-item>
    </Tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      TabBar: {
        '首页': 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-42162999-47b3-4601-bbf0-6ac2308b0373/955f09e2-a00c-4534-892c-c15ea0118126.png',
        '分类': 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-42162999-47b3-4601-bbf0-6ac2308b0373/dd19db59-6e15-4cb2-87ff-587d07e145cc.png',
        '购物车': 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-42162999-47b3-4601-bbf0-6ac2308b0373/e62d7155-0264-402b-ae2b-69ca71397888.png',
        '我的': 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-42162999-47b3-4601-bbf0-6ac2308b0373/ca1da9f5-d8f4-4c15-9cdc-68791ca72f65.png'
      }
    }
  }
}
</script>
<style>
@import "assets/css/base.css";
</style>
