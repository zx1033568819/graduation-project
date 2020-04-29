<template>
  <div class="index_container">
    <el-container>
      <el-header>
        <Header :activeIndex="content"></Header>
      </el-header>
      <el-main>
        <div class="logo_box">
          <img alt="logo" src="../assets/logo.png" />
        </div>
        <!-- 搜索栏 -->
        <div class="index_search">
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            class="search_input"
            v-model="key"
          ></el-input>
          <el-button class="search_btn">搜索</el-button>
        </div>
        <!-- 分类连接 -->
        <div class="index_catalog">
          <el-link href="./index" target="_blank" class="catalog_item">服装饰品</el-link>
          <el-link href="#" target="_blank" class="catalog_item">电子数码</el-link>
          <el-link href="#" target="_blank" class="catalog_item">日用百货</el-link>
          <el-link href="#" target="_blank" class="catalog_item">家具电器</el-link>
          <el-link href="#" target="_blank" class="catalog_item">二手图书</el-link>
          <el-link href="#" target="_blank" class="catalog_item">玩具游戏</el-link>
          <el-link href="#" target="_blank" class="catalog_item">动漫周边</el-link>
          <el-link href="#" target="_blank" class="catalog_item">古董收藏</el-link>
        </div>
        <!-- banner -->
        <div class="banner">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="(item, index) in imgList" :key="index">
              <img :src="item.url" alt />
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 推荐商品 -->
        <div class="recommend">
          <h4 class="el-icon-s-shop title ">推荐商品</h4>
          <el-divider></el-divider>
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="recommend_item">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../assets/img/服装1.png" />
                  <div style="padding: 14px;">
                    <span>黑色T恤</span>
                    <div class="recommend_bottom clearfix">
                      <span>价格：￥45.00</span>
                      <el-button type="text" class="recommend_btn">查看详情</el-button>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="recommend_item">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../assets/img/电子1.png" />
                  <div style="padding: 14px;">
                    <span>笔记本电脑</span>
                    <div class="recommend_bottom clearfix">
                      <span>价格：￥4500.00</span>
                      <el-button type="text" class="recommend_btn">查看详情</el-button>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="recommend_item">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../assets/img/服饰2.png" />
                  <div style="padding: 14px;">
                    <span>手表</span>
                    <div class="recommend_bottom clearfix">
                      <span>价格：￥600.00</span>
                      <el-button type="text" class="recommend_btn">查看详情</el-button>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Header from './Header'
export default {
  data () {
    return {
      content: '1',
      key: '',
      imgList: [
        { url: require('../assets/img/banner1.png') },
        { url: require('../assets/img/banner2.png') },
        { url: require('../assets/img/banner3.png') },
        { url: require('../assets/img/banner4.png') }
      ]
    }
  },
  components: {
    Header: Header
  }
}
</script>
<style lang="less" scoped>
.index_container {
  background-color: aliceblue;
  height: 100%;
}
.logo_box {
  margin: 20px 0;
}
.logo_box img {
  width: 288px;
  height: 120px;
}
.search_input {
  width: 50%;
}
.search_btn {
  background-color: #e6a23c;
  color: #4a4a4a;
  font-weight: 900;
}
.search_btn:hover {
  background-color: #fdf6ec;
  color: #4a4a4a;
}
.index_catalog {
  margin: 20px auto;
}
.catalog_item {
  margin: auto 10px;
}
.banner {
  width: 80%;
  margin: 20px auto;
}
.banner img {
  width: 640px;
  height: 200px;
}
.recommend {
  width: 80%;
  height: 300px;
  margin: 0 auto;
}
.recommend_bottom {
  margin-top: 13px;
  line-height: 12px;
}
.recommend_btn {
  padding: 0;
  float: right;
}
.recommend img {
  width: 100%;
  display: block;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
