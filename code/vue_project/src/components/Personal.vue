<template>
  <el-container>
    <el-header>
      <Header :activeIndex="content"></Header>
    </el-header>
    <el-main>
      <el-tabs :tab-position="tabPosition" style="height: 100%;">
        <el-tab-pane label="个人信息" class="personal_information">
          <el-table :data="personal_information" border style="width: 100%">
            <el-table-column prop="information" label="信息"></el-table-column>
            <el-table-column prop="content" label="内容"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <el-button type="text" size="small">编辑</el-button>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="我的收藏" class="collection">
          <el-row>
            <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px'}">
                <img src="../assets/img/电子2.png" />
                <div style="padding: 14px;">
                  <span>鼠标</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">取消收藏</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
          <el-tab-pane label="我的订单" class="order_information">
          <el-table :data="order_information" border style="width: 100%">
            <el-table-column prop="orderNumber" label="订单号"></el-table-column>
            <el-table-column prop="orderImg" label="商品图">
              <template slot-scope="scope">
                <img class="order_img" :src="scope.row.orderImg">
            </template>
            </el-table-column>
            <el-table-column prop="orderName" label="商品名称"></el-table-column>
            <el-table-column prop="orderAddress" label="收货地址"></el-table-column>
            <el-table-column prop="ordertime" label="购买时间">
              <template>{{ currentDate }}</template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="收货地址" class="address_information">
           <el-table :data="address_information" border>
             <el-table-column prop="address" label="地址"></el-table-column>
             <el-table-column prop="addNumber" label="邮编"></el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
              <el-button type="text" size="small">增加</el-button>
              <el-button type="text" size="small">修改</el-button>
              <el-button type="text" size="small">删除</el-button>
            </el-table-column>
           </el-table>
        </el-tab-pane>
        <el-tab-pane label="我发布的">
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>
<script>
import Header from './Header'
export default {
  data () {
    return {
      content: '3',
      tabPosition: 'left',
      currentDate: new Date(),
      // 信息表数据
      personal_information: [
        {
          information: '用户名',
          content: 'admin'
        },
        {
          information: '性别',
          content: '男'
        },
        {
          information: '出生日期',
          content: '1997-03-10'
        },
        {
          information: '电话',
          content: '18753889354'
        },
        {
          information: '邮箱',
          content: '1055483312@qq.com'
        }
      ],
      // 订单数据
      order_information: [
        {
          orderNumber: '202041416190001',
          orderImg: require('../assets/img/电子1.png'),
          orderName: '电脑',
          orderAddress: '四川省成都东软学院',
          orderTime: this.currentDate
        },
        {
          orderNumber: '202041416190002',
          orderImg: require('../assets/img/电子2.png'),
          orderName: '鼠标',
          orderAddress: '四川省成都东软学院',
          orderTime: this.currentDate
        },
        {
          orderNumber: '202041416190003',
          orderImg: require('../assets/img/服饰6.png'),
          orderName: '卫衣',
          orderAddress: '四川省成都东软学院',
          orderTime: this.currentDate
        }
      ],
      // 地址数据
      address_information: [
        {
          address: '上海市普陀区金沙江路 1518 弄',
          addNumber: '610000'
        },
        {
          address: '四川省成都市双流区',
          addNumber: '614000'
        }
      ]
    }
  },
  components: {
    Header: Header
  }
}
</script>
<style lang="less" scoped>
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 100%;
}
.personal_information {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}
.order_information{
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.address_information{
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.time {
  font-size: 13px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.collection {
  width: 100%;
  height: 300px;
  margin: 0 auto;
}
.collection img {
  width: 200px;
  margin: 0 auto;
  display: block;
}
.order_img{
  width: 80px;
  height:80px;
  border: none;
}
</style>
