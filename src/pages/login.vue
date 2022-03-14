<template>
  <div class="login">
    <div class="login-header">
      <div class="container">
        <div class="login-logo-box">
          <img src="/imgs/logo-mi.png" alt="" class="logo" />
          <div class="logo-desc">
            <h1>小米商城</h1>
            <div class="desc">让每个人都能享受科技的乐趣</div>
          </div>
        </div>
      </div>
    </div>
    <div class="login-body">
      <div class="container">
        <div class="login-form">
          <h2>
            <span class="active">账号登录</span>
            <span class="partition">|</span>
            <span>扫码登录</span>
          </h2>
          <div class="input">
            <input
              type="text"
              placeholder="邮箱/手机号码/小米ID"
              v-model="username"
            />
          </div>
          <div class="input">
            <input type="password" placeholder="密码" v-model="password" />
          </div>
          <input class="login-btn" type="button" value="登录" @click="login" />
          <div class="other-ways">
            <div class="note">
              <a href="">手机短信登录/</a>
              <a href="">注册</a>
            </div>
            <div class="forget">
              <a href="javascript:;" @click="register">立即注册</a>
              <span>|</span>
              <a href="">忘记密码?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="logon-footer">
      <div class="container">
        <div class="language">
          <a>简体</a>
          <span>|</span>
          <a>繁体</a>
          <span>|</span>
          <a>English</a>
          <span>|</span>
          <a>常见问题</a>
          <span>|</span>
          <a>隐私政策</a>
        </div>
        <div class="copyright">
          京公网安备11010802020134号-京ICP证110507号<i
          ></i>小米公司版权所有-京ICP备10046444
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      userId: ''
    }
  },
  methods: {
    login () {
      let { username, password } = this
      this.axios.post('/user/login', {
        username,
        password
      }).then(res => {
        console.log(res)
        this.$cookie.set('userId', res.id, { expires: '1M' })
        this.$router.push('/index')
      })
    },
    register () {
      this.axios.post('/user/register', {
        username: 'wangxiaochao',
        password: '123456',
        mail: 'wangxiaochao@mail.com'
      }).then(() => {
        alert('注册成功')
      })
    }
  }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/base.scss';
.login {
  .container {
    height: 100%;
  }
  .login-header {
    height: 112px;
    background-color: $colorG;
    .login-logo-box {
      height: 100%;
      @include flex(flex-start);
      .logo {
        width: 53px;
        height: 53px;
        margin-right: 18px;
      }
      .logo-desc {
        h1 {
          font-size: 33px;
          color: $colorB;
          line-height: 32px;
          margin-bottom: 8px;
        }
        .desc {
          font-size: $fontK;
          color: $colorC;
        }
      }
    }
  }
  .login-body {
    height: 558px;
    background: url('/imgs/login-bg.jpg') no-repeat center;
    .login-form {
      width: 410px;
      height: 510px;
      background-color: $colorG;
      position: absolute;
      right: 0;
      top: 29px;
      box-sizing: border-box;
      padding: 40px 31px 0;
      h2 {
        font-size: $fontE;
        color: $colorC;
        text-align: center;
        margin-bottom: 49px;
        & .active {
          color: $colorA;
        }
        .partition {
          display: inline-block;
          margin: 0 35px;
        }
        span {
          cursor: pointer;
        }
      }
      .input {
        width: 348px;
        height: 50px;
        margin-bottom: 20px;
        input {
          width: 100%;
          height: 100%;
          border: 1px solid #e5e5e5;
          box-sizing: border-box;
          padding-left: 18px;
          font-size: $fontJ;
          color: $colorD;
        }
      }
      .login-btn {
        width: 349px;
        height: 50px;
        line-height: 50px;
        background-color: $colorA;
        color: $colorG;
        text-align: center;
        font-size: $fontI;
        border: 0;
        margin: 10px 0 14px;
      }
      .other-ways {
        @include flex();
        font-size: $fontJ;
        font-weight: 500;
        .note {
          a {
            color: $colorA;
          }
        }
        .forget {
          color: $colorD;
          span {
            display: inline-block;
            margin: 0 5px;
          }
          a {
            color: $colorD;
          }
        }
      }
    }
  }
  .logon-footer {
    height: 391px;
    background-color: $colorG;
    text-align: center;
    color: $colorB;
    font-size: $fontJ;
    overflow: hidden;
    .language {
      margin: 250px 0 19px;
      a {
        color: $colorB;
      }
      span {
        display: inline-block;
        margin: 0 4px;
      }
    }
  }
}
</style>