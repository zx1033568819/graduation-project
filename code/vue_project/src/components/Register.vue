<template>
  <div class="register_container">
    <div class="logo_box">
      <img alt="logo" src="../assets/logo.png" />
    </div>
    <div class="register_box">
      <el-form
        :model="registerForm"
        status-icon
        :rules="registerRules"
        ref="registerRef"
        label-width="80px"
        class="register_form"
      >
        <h3>用户注册</h3>
        <el-form-item label="用户名" prop="user_name">
          <el-input v-model="registerForm.user_name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio v-model="registerForm.sex" label="男">男</el-radio>
          <el-radio v-model="registerForm.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="密码" prop="user_password">
          <el-input type="password" v-model="registerForm.user_password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="registerForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="出生日期" prop="user_birth">
          <el-date-picker v-model="registerForm.user_birth" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="电话号码" prop="cell_number">
          <el-input v-model="registerForm.cell_number"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="registerForm.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerRef')">提交</el-button>
          <el-button @click="resetForm('registerRef')">重置</el-button>
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
        if (this.registerForm.checkPass !== '') {
          this.$refs.registerRef.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.user_password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        user_name: 'lolili',
        sex: '女',
        user_password: 'lolili123456',
        checkPass: 'lolili123456',
        user_birth: '1997-03-09',
        cell_number: '13254668912',
        email: 'lolili@163.com'
      },
      registerRules: {
        user_name: [
          { required: true, message: '请输入登录账号', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        sex: [{ required: true, trigger: 'blur' }],
        user_password: [{ validator: validatePass, trigger: 'blur', required: true }],
        checkPass: [
          { validator: validatePass2, trigger: 'blur', required: true }
        ],
        user_birth: [{ required: true }],
        cell_number: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { max: 11, message: '长度在11个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs.registerRef.validate(async valid => {
        if (!valid) return
        await this.$http.post('loginRouter/register', this.registerForm).then(res => {
          if (res.status === 200) {
            this.$message.success('注册成功')
            this.$router.push({ path: '/index' })
          }
        }).catch(err => {
          if (err.status !== 200) { return this.$message.error('注册失败') }
        })
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="less" scoped>
.register_container {
  background-color: #e6a23c;
  height: 100%;
}
.register_box {
  height: 600px;
  width: 600px;
  background-color: #fffff0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(0, -50%);
}
.register_form {
  position: absolute;
  top: 5%;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
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
