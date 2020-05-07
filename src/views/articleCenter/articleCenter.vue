<template>
  <div class="articlecontent">
    <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="(item, index) in typeList"
          :key="index"
          :label="item.type"
          :value="item.type">
        </el-option>
      </el-select>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      value: ''
    }
  },
  activated() {
    if (!this.typeList.length) {
      this.getClassification()
    }
  },
  watch: {
    value() {
      this.getArticleByType()
    }
  },
  computed: {
    ...mapState(['typeList'])
  },
  methods: {
    ...mapMutations(['changeTypeList']),
    async getArticleByType() {
      const { data: res } = await this.axios.get('/getArticleByType', {
        params: {
          size: 10,
          page: 0,
          selectType: this.value
        }
      })
      console.log(res)
    },
    async getClassification() { // 可以用混用
      const { data: res } = await this.axios.get('/classification/select')
      console.log(res)
      if (res.status === 200) {
        this.changeTypeList(res.data)
      }
    }
  }
}
</script>

<style scoped>
.articlecontent{
  width: 100%;
  height: 100%;
}
</style>
