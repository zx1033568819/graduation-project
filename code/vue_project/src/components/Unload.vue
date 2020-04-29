<template>
  <el-container class="unload_container">
    <el-header>
      <Header :activeIndex="content"></Header>
    </el-header>
    <el-main>
      <div class="unload_box">
        <el-form
          ref="unloadRef"
          :model="unloadForm"
          :rules="unloadRules"
          label-width="120px"
          class="unload_form"
        >
          <el-form-item label="商品名称" prop="product_name">
            <el-input v-model="unloadForm.product_name"></el-input>
          </el-form-item>
          <el-form-item label="商品价格(元)" prop="product_price">
            <el-input v-model="unloadForm.product_price"></el-input>
          </el-form-item>
          <el-form-item label="商品种类" prop="product_type">
            <el-select v-model="unloadForm.product_type" placeholder="请选择">
              <el-option label="服装饰品" value="服装饰品"></el-option>
              <el-option label="电子数码" value="电子数码"></el-option>
              <el-option label="日用百货" value="日用百货"></el-option>
              <el-option label="家具电器" value="家具电器"></el-option>
              <el-option label="二手图书" value="二手图书"></el-option>
              <el-option label="玩具游戏" value="玩具游戏"></el-option>
              <el-option label="动漫周边" value="动漫周边"></el-option>
              <el-option label="古董收藏" value="古董收藏"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品图片" prop="product_picture">
            <el-upload action="#" list-type="picture-card" :auto-upload="false">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{file}">
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <i class="el-icon-download"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
            <el-dialog :visible.sync="unloadForm.dialogVisible">
              <img width="100%" :src="unloadForm.dialogImageUrl" alt />
            </el-dialog>
          </el-form-item>
          <el-form-item label="商品描述" prop="product_desc">
            <el-input type="textarea" rows="8" v-model="unloadForm.product_desc" class="product_desc"></el-input>
          </el-form-item>
          <el-form-item>
          <el-button type="primary" @click="submitForm('unloadRef')">发布</el-button>
          <el-button @click="resetForm('unloadRef')">重置</el-button>
        </el-form-item>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import Header from './Header'
export default {
  data () {
    return {
      content: '2',
      unloadForm: {
        product_name: '',
        product_price: '',
        product_type: ' ',
        product_desc: ' ',
        // 图片
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
      },
      unloadRules: {
        product_name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        product_price: [
          { required: true, message: '请输入商品价格', trigger: 'blur' }
        ],
        product_type: [
          { required: true, message: '请选择商品种类', trigger: 'blur' }
        ],
        product_picture: [
          { required: true, message: '请上传商品图片', trigger: 'blur' }
        ],
        product_desc: [
          { required: true, message: '请填写商品描述', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    Header: Header
  },
  methods: {
    handleRemove (file) {
      console.log(file)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload (file) {
      console.log(file)
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('注册成功!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="less" scoped>
.unload_container{
    height: 800px;
}
.unload_box {
  width: 60%;
  display: flex;
  background-color: #e6a23c;
  margin: 0 auto;
  align-items: center;
  height: 100%;
}
.unload_form {
  margin: 0 auto;
  width: 50%;
  text-align: left;
}
</style>
