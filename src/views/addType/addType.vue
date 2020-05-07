<template>
<div style="overflow:hidden">
  <div class="addtypecontent">
    <div class="inputcontent"
    v-for="(item, index) in keyList" :key="index">
      <input type="text" v-model="item.type">
    </div>
    </div>
    <div class="btn">
      <div class="btnParent">
      <p class="warn" @click="addKey">增加</p>
      <p class="add" @click="deleteKey">删除</p>
      <p class="delete" @click="toSendKey">提交</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      keyList: [
        {
          type: ''
        }
      ]
    }
  },
  methods: {
    addKey() {
      this.keyList.push({ type: '' })
    },
    deleteKey() {
      if (this.keyList.length > 1) {
        this.keyList.splice(this.keyList.length - 1, 1)
      }
    },
    async toSendKey() {
      console.log(this.keyList)
      for (var i = 0; i < this.keyList.length; i++) {
        if (this.keyList[i].type === '') {
          alert(`第${i}项为空,请填写后提交`)
          return
        }
      }
      const { data: res } = await this.axios.get('/classification/insert', {
        params: {
          lists: JSON.stringify(this.keyList)
        }
      })
      console.log(res)
      if (res.status === 200) {
        this.keyList = [{ type: '' }]
      }
    }
  }
}
</script>

<style scoped>
.addtypecontent{
  width: 90%;
  height: 100%;
  margin:  0 auto;
  position: relative;
  overflow: scroll;
}
.inputcontent{
  position: relative;
  width: 90%;
  height: 80px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start
}
.inputcontent input{
  width: 60%;
  height: 40px;
  line-height: 40px;
  margin-left: 20px;
  border: 2px solid lightskyblue;
  outline: none;
}
.btnParent{
  width: 600px;
  height: 100px;
  position: absolute;
  margin-left: 50%;
  transform: translateX(-50%);
    /* bottom: 50px; */
  /* background-color: red; */
}
.btn{
  width: 90%;
  position: fixed;
  bottom: 0px;
  background-color: #F0F0F0;
  height: 100px;
}
.btnParent p{
  float: left;
  width: 30%;
  height: 80px;
  line-height: 80px;
  margin-right: 3%;
  text-align: center;
  border-radius: 10px;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
}
.warn{
  background-color: lightskyblue;
}
.add{
  background-color: lightseagreen;
}
.delete{
  background-color: lightcoral;
}

</style>
