<template>
  <div class="product_container">
    <div class="logo_box">
      <img alt="logo" src="../assets/logo.png" />
    </div>
    <div class="product_box">
      <!-- 登录注册表单区域 -->
      <el-form ref="productRef" :model="productForm" label-width="80px" class="product_form">
        <h3>商品详情</h3>
        <el-form-item prop="productImg">
          <img :src="productForm.productImg" />
        </el-form-item>
        <el-form-item label="商品名称" prop="productName">
          <el-input v-model="productForm.productName" type="text"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="productPrice">
          <el-input v-model="productForm.productPrice" type="text"></el-input>
        </el-form-item>
        <el-form-item label="商品描述" prop="productDesc">
          <el-input v-model="productForm.productDesc" type="textarea"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item>
          <el-popover placement="left-start" width="500" trigger="click">
          <el-form :model="payForm" label-width="120px" class="pay_form">
              <el-form-item label="请选择收货地址" prop="addressList">
                  <el-select v-model="payForm.addressList" placeholder="请选择">
                  </el-select>
              </el-form-item>
              <el-form-item>
                  <el-button class="product_btn" @click="pay">支付</el-button>
              </el-form-item>
          </el-form>
            <el-button slot="reference" class="product_btn">购买</el-button>
          </el-popover>
          <el-button class="product_btn el-icon-star-off" @click="collection">收藏</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productForm: {
        productImg: require('../assets/img/服饰5.png'),
        productName: '长裙',
        productPrice: '￥180.00',
        productDesc: '长裙 仅试穿 可小刀'
      },
      payForm: {
        addresslist: ' '
      }
    }
  },
  methods: {
    pay () {
      console.log('购买')
    },
    collection () {
      console.log('收藏')
    }
  }
}
</script>

<style lang="less" scoped>
.product_container {
  background-color: #e6a23c;
  height: 100%;
}
.product_box {
  height: 700px;
  width: 600px;
  background-color: #fffff0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(0, -50%);
}
.product_box img {
  width: 200px;
  height: 200px;
}
.product_form {
  position: absolute;
  bottom: 20%;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
}
.product_btn {
  width: 100px;
  background-color: #e6a23c;
  color: black;
  font-weight: 900;
}
.product_btn:hover {
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
