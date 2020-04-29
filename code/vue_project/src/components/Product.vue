<template>
    <el-container class="product_container">
        <el-main>
        <div class="logo_box">
          <img alt="logo" src="../assets/logo.png" />
        </div>
        <!-- 搜索栏 -->
        <div class="product_search">
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            class="search_input"
            v-model="key"
          ></el-input>
          <el-button class="search_btn">搜索</el-button>
        </div>
        <!-- 分类连接 -->
        <div class="product_catalog">
          <el-link href="./index" target="_blank" class="catalog_item">服装饰品</el-link>
          <el-link href="#" target="_blank" class="catalog_item">电子数码</el-link>
          <el-link href="#" target="_blank" class="catalog_item">日用百货</el-link>
          <el-link href="#" target="_blank" class="catalog_item">家具电器</el-link>
          <el-link href="#" target="_blank" class="catalog_item">二手图书</el-link>
          <el-link href="#" target="_blank" class="catalog_item">玩具游戏</el-link>
          <el-link href="#" target="_blank" class="catalog_item">动漫周边</el-link>
          <el-link href="#" target="_blank" class="catalog_item">古董收藏</el-link>
        </div>
        <div class="recommend">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="recommend_item">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../assets/img/服饰3.png" />
                  <div style="padding: 14px;">
                    <span>长裙</span>
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
                  <img src="../assets/img/电子4.png" />
                  <div style="padding: 14px;">
                    <span>智能手机</span>
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
</template>
<script>
export default {
}
</script>
<style scoped>
.product_container {
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
.product_catalog {
  margin: 20px auto;
}
.catalog_item {
  margin: auto 10px;
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
