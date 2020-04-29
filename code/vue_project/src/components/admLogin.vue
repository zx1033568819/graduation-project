<template>
  <div class="login_container">
    <div class="logo_box">
      <img alt="logo" src="../assets/logo.png" />
    </div>
    <div class="login_box">
      <!-- 登录注册表单区域 -->
      <el-form
        ref="loginRef"
        :model="loginForm"
        :rules="loginRules"
        label-width="60px"
        class="login_form"
      >
        <h3>后台管理系统管理员登录</h3>
        <!-- 账号 -->
        <el-form-item label="账号" prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" show-password prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item>
          <el-button class="login_btn" @click="login">登录</el-button>
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
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [
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
      this.$refs.loginRef.validate(valid => {
        if (valid) {
          this.$router.push({ path: '/index' })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    register () {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #e6a23c;
  height: 100%;
}
.login_box {
  height: 400px;
  width: 500px;
  background-color: #fffff0;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.login_form {
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
}
.login_btn {
  width: 100%;
  background-color: #e6a23c;
  color: black;
  font-weight: 900;
}
.login_btn:hover{
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
