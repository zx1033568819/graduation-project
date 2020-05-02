<template>
  <div class="adminRegister_container">
    <div class="logo_box">
      <img alt="logo" src="../assets/logo.png" />
    </div>
    <div class="adminRegister_box">
      <!-- 登录注册表单区域 -->
      <el-form
        ref="adminRegisterRef"
        :model="adminRegisterForm"
        :rules="adminRegisterRules"
        label-width="80px"
        class="adminRegister_form"
      >
        <h3>后台管理系统管理员登录</h3>
        <!-- 账号 -->
        <el-form-item label="账号" prop="admin_name">
          <el-input v-model="adminRegisterForm.admin_name"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input v-model="adminRegisterForm.password" show-password autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="adminRegisterForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item>
         <el-button type="primary" @click="submitForm('adminRegisterRef')">提交</el-button>
          <el-button @click="resetForm('adminRegisterRef')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.adminRegisterForm.checkPass !== '') {
          this.$refs.adminRegisterRef.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.adminRegisterForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      // 登录表单数据绑定对象
      adminRegisterForm: {
        admin_name: '',
        password: '',
        checkPass: ''
      },
      adminRegisterRules: {
        admin_name: [
          { required: true, message: '请输入登录账号', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur', required: true }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur', required: true }
        ]
      }
    }
  },
  methods: {
    submitForm (adminRegisterForm) {
      this.$refs.adminRegisterRef.validate(async valid => {
        if (!valid) return
        await this.$http.post('adminLoginRouter/adminRegister', this.adminRegisterForm).then(res => {
          if (res.status === 200) {
            this.$message.success('注册成功')
            this.$router.push({ path: '/adminLogin' })
          }
        }).catch(err => {
          if (err.status !== 200) { return this.$message.error('注册失败') }
        })
      })
    },
    resetForm (adminRegisterForm) {
      this.$refs[adminRegisterForm].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.adminRegister_container {
  background-color: #e6a23c;
  height: 100%;
}
.adminRegister_box {
  height: 400px;
  width: 500px;
  background-color: #fffff0;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.adminRegister_form {
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
}
.logo_box{
    width: 300px;
    height: 200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
}
.logo_box img {
  width: 216px;
  height: 90px;
}
</style>
