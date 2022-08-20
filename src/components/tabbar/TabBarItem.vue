
<template>
  <div class="item-tab-bar" @click="itemClick">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>
<script>


export default {
  name: "TabBarItem",
  methods: {
    itemClick(e) {
      let tab = document.querySelectorAll('.tab')
      let link = ['/home', '/category', '/car', 'profile']
      for (let i = 0; i < tab.length; i++) {
        if (tab[i] === e.currentTarget)   // 获取当前点击的元素
          for (const item in link) {
            // console.log(link[i]);
            for (let j = 0; j < tab.length; j++) {
              tab[j].style.backgroundColor = ''
            }
            tab[i].style.backgroundColor = 'pink'
            this.$router.push(link[i]).catch(err => err)
            return
        }
      }
    }
  }
}
</script>

<style scoped>

.item-tab-bar {
  flex: 1; /*进行均等分*/
  text-align: center;
  height: 49px;
}

.item-tab-bar /deep/img {
  width: 24px;
  height: 24px;
  vertical-align: middle; /*去掉图片下面多余的3px*/
}
</style>
