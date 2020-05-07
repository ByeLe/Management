<template>
  <div class="typecontent">
      <div class="typelist"  v-for="item in typeList" :key="item.id">
        <p>文章分类名称:</p>
        <p>{{item.type}}</p>
        <i class="iconfont icon-guanbicuowu" @click="confirmDelete(item.type)"></i>
      </div>
      <p class="addBtn" >添加类型</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      // typeList: []
    }
  },
  activated() {
    this.getClassification()
  },
  computed: {
    ...mapState(['typeList'])
  },

  methods: {
    ...mapMutations(['changeTypeList']),
    async getClassification() {
      const { data: res } = await this.axios.get('/classification/select')
      console.log(res)
      if (res.status === 200) {
        this.changeTypeList(res.data)
      }
    },
    confirmDelete(type) {
      const confirmb = confirm('是否确认删除?')
      if (confirmb) {
        this.DeleteTypeById(type)
      }
    },
    async DeleteTypeById(type) {
      const { data: res } = await this.axios.get('/classification/delete', {
        params: {
          deleteType: type
        }
      })
      if (res.status === 200) {
        const index = this.typeList.indexOf(type)
        this.typeList.splice(index, 1)
      }
    }
  }
}
</script>

<style scoped>
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.fade-leave, .fade-enter-to {
   opacity: 255;
}
.fade-enter-active{
  transition: all 1s linear
}
.typecontent{
  width: 90%;
  height: 100%;
  margin:  0 auto;
  position: relative;
}
.typelist{
  width: 20%;
  height: 80px;
  margin-top: 10px;
  background-color: lightgrey;
  border-radius: 10px;
  border: 1px solid #F4F4F4;
  color: lightslategray;
  float: left;
  margin-right: 20px;
  position: relative;
}
.typelist p{
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  padding-left: 10px;

}
.typelist i{
position: absolute;
bottom: 10px;
right: 10px;
}
.addBtn{
  width: 150px;
  height: 80px;
  line-height: 80px;
  position: absolute;
  margin-left: 50%;
  transform: translateX(-50%);
  background-color: lightseagreen;
  bottom: 50px;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
}
.typelist p:last-of-type{
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
}
</style>
