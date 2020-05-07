<template>
  <div class="hallcontent">
    <header class="header">
      <p>个人博客管理后台</p>
    </header>
    <div class="contentArea" >
      <div class="leftcontent">
        <ul>
          <li :class="[selectItem == 'type' ? 'select' : 'notselect']"
          @click="changeSelectItem('type')">类型中心</li>
          <li :class="[selectItem == 'article' ? 'select' : 'notselect']"
          @click="changeSelectItem('article')">文章中心</li>
        </ul>
      </div>
      <div class="rightcontent">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectItem: 'type'
    }
  },
  mounted() {
  },
  methods: {
    changeSelectItem(item) {
      if (item === this.selectItem) {
        return false
      }
      this.selectItem = item
      if (this.selectItem === 'type') {

      } else { // 请求文章

      }
    }
  }
}
</script>

<style scoped>
.hallcontent{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header{
  width: 100%;
  height: 80px;
  background-color: lightskyblue;
}
.header p{
  width: 100%;
  height: 80px;
  line-height: 80px;
  box-sizing: border-box;
  padding-left: 20px;
  color: #ffffff;
  font-size: 36px;
  font-weight: bold;
}
.contentArea{
  flex-grow: 1;
  overflow: hidden;
}
.leftcontent{
  width: 250px;
  height: 100%;
  float: left;
  background-color: lightskyblue;
}
.leftcontent ul{
  width: 100%;
}
.leftcontent ul li{
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.5s;
}
.select{
  color: lightskyblue;
  background-color: #ffffff;
}
.notselect{
  color: #ffffff;
  background-color:lightskyblue;
  border-bottom: 1px solid #ffff;

}
.leftcontent ul li:hover{
  color: lightskyblue;
  background-color: #ffffff;
  border-bottom: 1px solid lightskyblue;
}
/* BFC的应用 */
.rightcontent{
  height: 100%;
  /* background-color : black; */
  overflow: hidden;
}
</style>
