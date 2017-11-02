<template>
  <div class="kuan">
  	<div v-html="defa.title" class="h3">
    </div>
     <p class="xiang"><span><b>.</b>发布于{{times(defa)}}</span><span><b>.</b>作者{{defa.author.loginname}}</span><span><b>.</b>{{defa.visit_count}}次浏览</span><span><b>.</b>来自{{comeFrom(defa)}}</span></p>
    <div v-html="defa.content" class="content">
    </div>
    <p class="huifus" v-if="defa.reply_count">{{ defa.reply_count }}回复</p>
    <!-- 评论开始 -->
    <div class="comment" v-if="ping" v-for="(item,index) in ping">
			<a href="#" class="tus">
				<img :src="item.author.avatar_url">
			</a>
			<!-- 用户名开始 -->
			<div class="name">{{ item.author.loginname }}</div>
			<!-- 用户名结束 -->
			<!-- 时间开始 -->
			<div class="floor">{{ index + 1 }}楼. {{ times(item) }}</div>
			<!-- 时间结束 -->
      <!-- 点赞开始 -->
      <div class="good" v-if="item.ups.length">
        <a href="#"><img src="../../assets/images/2.png"></a>
        <span class="number">{{ item.ups.length }}</span>
      </div>
      <!-- 点赞结束 -->
			<!-- 评论的内容开始 -->
			<div class="pceo" v-html="item.content"></div>
			<!-- 评论的内容结束 -->
    </div>
    <!-- 评论结束 -->
  </div>
</template>
<script type="text/javascript">
import axios from 'axios'
export default {
  data () {
    return {
      defa: [],
      ping: []
    }
  },
  created () {
    this._deData()
  },
  methods: {
    _deData () {
      if (this.$route.params.id === undefined) {
        return
      }
      console.log(this.$route)
      let deUrl = 'https://www.vue-js.com/api/v1/topic/' + this.$route.params.id
      axios.get(deUrl, {
        params: {
          mdrender: true
        }
      }).then((res) => {
        console.log(res)
        this.defa = res.data.data
        this.ping = res.data.data.replies
      }).catch((error) => {
        console.log(error)
      })
    },
    times (item) {
      var time = new Date(item.create_at)
      var jian = new Date()
      var shi = time.getTime()
      var ke = jian.getTime()
      var yue = Math.floor((ke - shi) / 1000 / 60 / 60 / 24 / 30)
      if (yue > 0) {
        return yue + '月前'
      }
      var tian = Math.floor((ke - shi) / 1000 / 60 / 60 / 24)
      if (tian > 0) {
        return tian + '天前'
      }
      var xiao = Math.floor((ke - shi) / 1000 / 60 / 60)
      if (xiao > 0) {
        return xiao + '小时前'
      }
      var fen = Math.floor((ke - shi) / 1000 / 60)
      if (fen) {
        return fen + '分前'
      }
    },
    comeFrom (defa) {
      // console.log(defa.tab)
      if (defa.tab === 'share') {
        return '分享'
      }
      if (defa.tab === 'good') {
        return '精华'
      }
      if (defa.tab === 'weex') {
        return 'weex'
      }
      if (defa.tab === 'ask') {
        return '问答'
      }
      if (defa.tab === 'job') {
        return '招聘'
      }
    }
  },
  watch: {
    // 检测路由信息变化，重新发送请求
    $route: function () {
      this._deData()
    }
  }
}
</script>
<style type="text/css">
html{
  font-size: 20px;
}
.kuan{
	width: 18.75rem;
	height: auto;
  margin-top: 9.0rem;
}
.content{
	width: 17.25rem;
	height: auto;
	margin:0 auto;
	background: #fff;
	padding:0 10px;
	font-size: 0.8rem;
	word-wrap:break-word;
	word-break:break-all;
	margin-top: 10px;
  color:#333;
}
.kuan div img{
	width: 100%;
	margin-top: 20px;
}
.h3{
	background: #fff;
	width: 18.25rem;
	margin: 0 auto;
  font-size: 1.0rem;
  font-weight: 800;
}
.kuan .code{
	width: 18.25rem;
	height: auto
}
.huifus{
	display: inline-block;
  width: 17.25rem;
  height:1.0rem;
  padding:10px;
  margin: 0 auto;
  font-size: 0.7rem;
  color:#1c6132;
}
/*评论开始*/
.comment{
	width:17.25rem;
	height: auto;
	padding:0.5rem;
	margin:0 auto;
	clear:both;
	overflow: hidden;
	position: relative;
	background: #fff;
  color:#333;
}
/*头像开始*/
.tus{
	display: inline-block;
	width: 1.5rem;
	height: 1.5rem;
	margin:0;
	float: left;
	position: relative;
}
.tus img{
	width: 1.5rem;
	height: 1.5rem;
	position: absolute;
	top:-1rem;
}
/*头像结束*/
/*用户名开始*/
.name{
	float: left;
	font-size: 0.7rem;
	font-weight: 800;
	margin-left: 5px;
  color:#666;
}
/*用户名结束*/
/*时间开始*/
.floor{
	font-size: 0.7rem;
	margin-left: 8px;
	float: left;
  color:#08c;
}
/*时间结束*/
/*点赞开始*/
.good{
  width: 0.75rem;
  height: 0.85rem;
  float: right;
  position: relative;
  margin-right: 20px;
}
.good img{
  width: 100%;
  height: 100%;
  position: absolute;
  top:-22px;
  left:-22px;
}
.number{
  float:right;
  font-size: 0.6rem;
  text-align: center;
}
/*点赞结束*/
/*评论的内容开始*/
.pceo{
	width: 100%;
	float: left;
	font-size: 0.75rem;
	margin-top: 0.5rem;
}
.xiang{
 width: 18.25rem;
  font-size: 0.6rem;
  background: #fff;
  margin:0 auto;
  padding-top: 10px;
  color:#838383;
}
.xiang>b{
  font-size: 1.0rem;
  font-weight: 800;
}
.content h2{
  margin:20px 0;
}
.content .markdown-text p{
  line-height: 1.5
}
/*评论的内容结束*/
/*评论结束*/
</style>