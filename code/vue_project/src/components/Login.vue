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
        <h3>用户登录</h3>
        <!-- 账号 -->
        <el-form-item label="账号" prop="user_name">
          <el-input v-model="loginForm.user_name" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="user_password">
          <el-input v-model="loginForm.user_password" show-password prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item>
          <el-button class="login_btn" @click="login">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="login_btn" @click="register">注册</el-button>
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
        user_name: '',
        user_password: ''
      },
      loginRules: {
        user_name: [
          { required: true, message: '请输入登录账号', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        user_password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginRef.validate(async valid => {
        if (!valid) return
        await this.$http.post('loginRouter/login', this.loginForm).then(res => {
          if (res.status === 200) {
            this.$message.success('登陆成功')
            window.sessionStorage.setItem('token', res.data.token)
            this.$router.push({ path: '/index' })
          }
        }).catch(err => {
          if (err.status !== 200) { return this.$message.error('账号或密码错误，登陆失败') }
        })
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
  height: 530px;
  width: 540px;
  background-color: #fffff0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(0, -50%);
}
.login_form {
  position: absolute;
  bottom: 20%;
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
.logo_box {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(0, -50%);
}
.logo_box img {
  width: 432px;
  height: 180px;
}
</style>
