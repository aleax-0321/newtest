<template>
  <div class="reg-box mx-auto bg-white">
    <h2 class="text-center py-4">
      <router-link :to="{ name: 'LoginPage' }">登录</router-link>
      <span class="px-2">·</span>
      <router-link :to="{ name: 'RegsiterPage' }">注册</router-link>
    </h2>
    <el-form ref="form" :model="form" label-width="0px">
      <el-form-item>
        <el-input v-model="form.loginname" placeholder="用户名" prefix-icon="el-icon-user-solid"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input v-model="form.loginpass" placeholder="密码" prefix-icon="el-icon-lock"></el-input>
      </el-form-item>

    

      <el-form-item>
        <el-button type="primary" @click="onSubmit" id="btn">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        loginname: "",
        loginpass: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
  created() {
    document.body.style.background = "#eee";
  },
};
</script>

<style lang="scss" scoped>
.reg-box {
  width: 350px;
  margin-top: 100px;
  padding: 20px 30px;
  h2 {
    a {
      color: #666;
    }
    a.router-link-active {
      color: red;
      text-decoration: underline;
    }
  }
}
#btn{
    width: 100%;
}
</style>