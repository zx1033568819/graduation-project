<template>
  <el-container>
    <el-header>
      <div class="logo_box">
        <img alt="logo" src="../assets/logo.png" />
      </div>
      <h3>闲置物品交易系统后台管理</h3>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="activeIndex"
          class="aside_menu"
          mode="vertical"
          background-color="#FFDEAD"
          text-color="#4a4a4a"
          active-text-color="#F86321"
          ref="menuRef"
        >
          <el-menu-item index="1" @click="index_page">用户信息管理</el-menu-item>
          <el-menu-item index="2" @click="unload_page">商品信息管理</el-menu-item>
          <el-menu-item index="3" @click="personal_page">订单管理</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="search_box">
            <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            class="search_input"
            v-model="key"
          ></el-input>
          <el-button class="search_btn">查询</el-button>
        </div>
        <el-table :data="user_admin" border>
          <el-table-column prop="userId" label="用户id"></el-table-column>
          <el-table-column prop="userName" label="用户名"></el-table-column>
          <el-table-column prop="userPassword" label="密码"></el-table-column>
          <el-table-column prop="userSex" label="性别"></el-table-column>
          <el-table-column prop="userBirth" label="出生日期"></el-table-column>
          <el-table-column prop="userCellNum" label="电话"></el-table-column>
          <el-table-column prop="userEmail" label="邮箱" width="200"></el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <el-button type="text" size="small">增加</el-button>
            <el-button type="text" size="small">修改</el-button>
            <el-button type="text" size="small">删除</el-button>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      user_admin: [
        {
          userId: '41402001',
          userName: '张三',
          userPassword: 'zs23456789',
          userSex: '男',
          userBirth: '1997-03-10',
          userCellNum: '15638290303',
          userEmail: 'zhangsan23@163.com'
        },
        {
          userId: '41402002',
          userName: '李四',
          userPassword: 'ls212435216',
          userSex: '男',
          userBirth: '1980-09-09',
          userCellNum: '12423590303',
          userEmail: 'lisi23@163.com'
        },
        {
          userId: '41402003',
          userName: '罗丽丽',
          userPassword: 'lfafkem',
          userSex: '女',
          userBirth: '1972-09-09',
          userCellNum: '1563124252424',
          userEmail: 'zluolili@163.com'
        },
        {
          userId: '41402004',
          userName: '陈阳',
          userPassword: 'cy23456789',
          userSex: '男',
          userBirth: '1997-08-09',
          userCellNum: '15638290303',
          userEmail: 'chenyang@163.com'
        },
        {
          userId: '41402006',
          userName: 'jess',
          userPassword: 'jess1327374',
          userSex: '女',
          userBirth: '2000-4-12',
          userCellNum: '1563822314',
          userEmail: 'jess@163.com'
        },
        {
          userId: '41402007',
          userName: '白月',
          userPassword: 'by23456789',
          userSex: '女',
          userBirth: '1999-08-12',
          userCellNum: '1561232353',
          userEmail: 'baiyue3@163.com'
        }
      ]
    }
  }
}
</script>
<style scoped>
.el-header {
  background-color: #e6a23c;
  display: flex;
  align-items: center;
}
.logo_box {
  height: 60px;
  width: 144px;
}
.logo_box img {
  width: 144px;
  height: 60px;
}
.el-header h3 {
  color: #4a4a4a;
  display: inline-block;
  margin: 0 20px;
}
.el-aside {
  background-color: #ffdead;
}
.aside_menu {
  text-align: center;
}
.search_box{
    width: 60%;
    margin: 20px auto;
    display: flex;
    align-items: center;
}
</style>
