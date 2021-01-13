<template>
  <div class="reg-box mx-auto bg-white">
    <h2 class="text-center py-4">
      <router-link :to="{ name: 'LoginPage' }">登录</router-link>
      <span class="px-2">·</span>
      <router-link :to="{ name: 'RegsiterPage' }">注册</router-link>
    </h2>
    <el-form ref="form" :model="formData" label-width="0px" :rules="rules">
      <el-form-item prop="regname">
        <el-input
          v-model="formData.regname"
          placeholder="用户名"
          prefix-icon="el-icon-user-solid"
        ></el-input>
      </el-form-item>

      <el-form-item prop="regpass">
        <el-input
          v-model="formData.regpass"
          placeholder="密码"
          prefix-icon="el-icon-lock"
          show-password
        ></el-input>
      </el-form-item>

      <el-form-item prop="regpass2">
        <el-input
          v-model="formData.regpass2"
          placeholder="确认密码"
          prefix-icon="el-icon-lock"
          show-password
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="success" @click="onSubmit('form')" id="btn"
          >注册</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from "@/api/request.js";

export default {
  data() {
    var validateName = (rule, value, callback) => {
      let reg = /^[a-zA-Z0-9_]{4,10}$/;
      if (!reg.test(value)) {
        callback(new Error("字母，数字，下划线组成，4-10位"));
      } else {
        callback();
      }
    };

    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.formData.regpass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      formData: {
        regname: "",
        regpass: "",
        regpass2: "",
      },
      rules: {
        regname: [{ validator: validateName, trigger: "blur" }],
        regpass: [{ required: true, message: "请输入密码", trigger: "blur" }],
        regpass2: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },

  methods: {
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          request({
            method: "post",
            url: "http://127.0.0.1:3000/reg",
            data: this.formData,
          }).then((res) => {
            console.log(res.data);
            if (res.data.code === 1) {
              this.$message({
                type: "warning",
                message: res.data.message,
              });
            }
            if (res.data.code === 2) {
              this.$message({
                type: "warning",
                message: res.data.message,
              });
            }
            if (res.data.code === 3) {
              this.$message({
                type: "warning",
                message: res.data.message,
              });
            }
            if (res.data.code === 0) {
              this.$message({
                type: "success",
                message: res.data.message,
              });
              this.$router.push({name:"LoginPage"})
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
#btn {
  width: 100%;
}
</style>