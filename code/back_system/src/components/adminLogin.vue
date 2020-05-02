<template>
  <div class="adminLogin_container">
    <div class="logo_box">
      <img alt="logo" src="../assets/logo.png" />
    </div>
    <div class="adminLogin_box">
      <!-- 登录注册表单区域 -->
      <el-form
        ref="adminLoginRef"
        :model="adminLoginForm"
        :rules="adminLoginRules"
        label-width="60px"
        class="adminLogin_form"
      >
        <h3>后台管理系统管理员登录</h3>
        <!-- 账号 -->
        <el-form-item label="账号" prop="admin_name">
          <el-input v-model="adminLoginForm.admin_name" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input v-model="adminLoginForm.password" show-password prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item>
          <el-button class="adminLogin_btn" @click="login">登录</el-button>
          <el-button class="adminLogin_btn" @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 登录表单数据绑定对象
      adminLoginForm: {
        admin_name: '',
        password: ''
      },
      adminLoginRules: {
        admin_name: [
          { required: true, message: '请输入登录账号', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.adminLoginRef.validate(async valid => {
        if (!valid) return
        await this.$http.post('adminLoginRouter/adminLogin', this.adminLoginForm).then(res => {
          if (res.status === 200) {
            this.$message.success('登录成功')
            window.sessionStorage.setItem('token', res.data.token)
            this.$router.push({ path: '/adminSystem' })
          }
        }).catch(err => {
          if (err.status !== 200) { return this.$message.error('账号或密码错误，登录失败') }
        })
      })
    },
    register () {
      this.$router.push({ path: '/adminRegister' })
    }
  }
}
</script>

<style lang="less" scoped>
.adminLogin_container {
  background-color: #e6a23c;
  height: 100%;
}
.adminLogin_box {
  height: 400px;
  width: 500px;
  background-color: #fffff0;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.adminLogin_form {
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
}
.adminLogin_btn {
  width: 100px;
  background-color: #e6a23c;
  color: black;
  font-weight: 900;
}
.adminLogin_btn:hover{
  background-color: #fdf6ec;
  color: #4a4a4a;
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
