<template>
  <el-header class="all_header">
    <div class="left_header">
      <h3>闲置物品交易系统</h3>
      <a href="#" class="user el-icon-user-solid">admin</a>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="header_menu"
      mode="horizontal"
      background-color="#e6a23c"
      text-color="#FFFACD"
      active-text-color="#F86321"
      ref="menuRef"
    >
      <el-menu-item index="1" @click="index_page">首页</el-menu-item>
      <el-menu-item index="2" @click="unload_page">商品发布</el-menu-item>
      <el-menu-item index="3" @click="personal_page">个人中心</el-menu-item>
    </el-menu>
  </el-header>
</template>
<script>
export default {
  data () {
    return {
      key: ''
    }
  },
  props: ['activeIndex'],
  methods: {
    index_page () {
      this.$router.push({ path: '/index' })
    },
    unload_page () {
      this.$router.push({ path: '/unload' })
    },
    personal_page () {
      this.$router.push({ path: '/personal' })
    }
  }
}
</script>
<style lang="less" scoped>
.all_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.all_header h3 {
  display: inline-block;
  color: #4a4a4a;
}
.user {
  color: #4a4a4a;
  margin: 0 20px;
  font-size: 15px;
  text-decoration: none;
}
.user:hover {
  color: #4a4a4a;
  text-decoration: underline;
}
</style>
