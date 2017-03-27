<template>
  <div id='app'>
    <div class="footernav">
        <div class="nav first">
          <router-link to="/home" class="home">
              <span style="display:inline-block;" @click='home'>
                <img src="./assets/movie.svg" alt="影院" class="nav-img">
                <h1>首页</h1>
              </span>
          </router-link>
          </div>
          <div class="nav">
          <router-link to="/about" class="about">
              <span style="display:inline-block;" @click='about'>
                <img src="./assets/play.svg" alt="放映信息" class="nav-img">
                <h1>影院</h1>
              </span>
          </router-link>
          </div>
          <div class="nav">
          <router-link to="/me" class="me">
              <span style="display:inline-block;" @click='me'>
                <img src="./assets/me.svg" alt="关于自己" class="nav-img">
                <h1>我的</h1>
              </span>
          </router-link>
          </div>
          <!-- 路由视图 -->
          <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default{
    data(){
      return{

      }
    },
    methods: {
      home: function(el){
        axios.get('http://localhost:3000').then(function(){
          console.log('已经到后台了。');
        },function() {

        })
      }
    },
    watch:{

    }
  }
</script>

<style lang="scss">
    .footernav{
        .first{
            background-color:#f00;
        }
        .nav-img{
            width:1.25rem;
            height:1.25rem;
            margin-top:0.5rem;
            color:#8a869e;
        }
        .home{
            position: fixed;
            bottom: 0;
            font-size: 0.3rem;
            background-color:#fff;
            text-decoration:none;
            left:0;
            width:33%;
            text-align:center;
            border-top:1px solid #eee;
            color:#8a869e;
        }
        .about{
            position: fixed;
            bottom: 0;
            font-size: 0.3rem;
            left: 33%;
            background-color:#fff;
            text-decoration:none;
            width:33%;
            text-align:center;
            border-top:1px solid #eee;
            color:#8a869e;
        }
        .me{
            position: fixed;
            bottom: 0;
            font-size: 0.3rem;
            left: 66%;
            background-color:#fff;
            text-decoration:none;
            width:34%;
            text-align:center;
            border-top:1px solid #eee;
            color:#8a869e;
        }
    }
  
    
</style>
