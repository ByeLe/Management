<template>
  <div class="uploadcontent">
    <div class="contentdiv">
      <el-input
        placeholder="请输入标题"
        v-model="uploadData.fileTitle"
        clearable>
      </el-input>
      <el-input
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 8}"
        placeholder="请输入内容"
        v-model="uploadData.fileDesc">
      </el-input>

      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="(item, index) in typeList"
          :key="index"
          :label="item.type"
          :value="item.type">
        </el-option>
      </el-select>

      <el-upload
        class="upload-demo"
        :action="uploadUrl"
        :data="uploadData"
        multiple
        :limit="3"
        :on-success="uploadSuccess"
        :on-error="uploadError"
        :auto-upload="autoUpload"
        :file-list="fileList"
        :on-change='uploadChange'>
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      uploadUrl: '',
      inputStr: '',
      textareaStr: '',
      value: '',
      fileList: [],
      autoUpload: true,
      uploadData: {
        fileTitle: '',
        fileDesc: '',
        flietype: ''
      }
    }
  },
  activated() {
    this.uploadUrl = this.axios.defaults.baseURL + '/upload/flie'
    if (!this.typeList.length) {
      this.getClassification()
    }
  },
  computed: {
    ...mapState(['typeList'])
  },
  methods: {
    uploadError() {
      alert('上传失败')
    },
    uploadSuccess() {
      alert('上传成功')
    },
    uploadChange() {
      if (this.value === '') {
        alert('请选择类型')
        this.fileList = []
        return false
      }
      this.uploadData.flietype = this.value
      if (this.uploadData.fileTitle === '') {
        alert('请输入标题')
        this.fileList = []
        return false
      }
      if (this.uploadData.fileDesc === '') {
        alert('请输入描述')
        this.fileList = []
        return false
      }
      this.autoUpload = true
    },
    ...mapMutations(['changeTypeList']),
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
  .uploadcontent{
    width: 100%;
    height: 100%;
    /* display: flex;
    flex-direction: column;
    align-items: flex-start; */
  }
  .contentdiv{
    width: 50%;
    margin: 0 auto;
  }
  .el-input::before{
    content: '';
    display:block;
  }
  .el-input{
    /* margin: 0 auto; */
    margin-top: 20px;
    /* width: 500px; */
    /* height: 80px;
    line-height: 80px; */
  }
  .el-textarea{
    margin-top: 20px;
  }
  .el-select{
    margin-top: 20px;
  }
  .upload-demo{
    margin-top: 20px;
  }
</style>
