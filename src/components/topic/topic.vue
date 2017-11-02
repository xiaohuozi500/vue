<template>
	<div id="main">
		<div class="parane">
      <div class="celi" v-for="(item,index) in topicR">
      <router-link :to="'/topic/' + torouter.tab + '/' + item.id">
        <!-- 头像开始 -->
        <a href="#" class="img">
          <img v-lazy="item.author.avatar_url">
        </a>
        <!-- 头像结束 -->
        <!-- 标题开始 -->
        <div class="title">
          <span v-if="item.top">置顶</span>
          <span v-else-if="item.good">精华</span>
          <span v-else class="wod">问答</span>
          <a href="#" class="nowrap">{{ item.title }}</a>
        </div>
        <!-- 标题结束 -->
        <!-- 回复开始 -->
        <span class="spab">
          <span>{{ item.reply_count }}</span>/<span>{{ item.visit_count }}</span>
        </span>
        <!-- 回复结束 -->
        <!-- 发帖时间开始 -->
        <a href="#" class="time">{{ times(item) }}</a>
        <!-- 发帖时间结束 -->
        <!-- 分页器 -->
        <ul>
          <li></li>
        </ul>
        <!-- 分页器 -->
      </router-link>
      </div>
		</div>
	</div>
</template>
<script type="text/javascript">
import { getTopicList } from '@/common/js/getData'
export default {
  data () {
    // 定义数据
    return {
      topicR: [],
      torouter: []
    }
  },
  created () {
    this._getData()
  },
  methods: {
    _getData () {
      let param = {
        page: 1,
        tab: this.$route.params.tab,
        limit: 30
      }
      getTopicList(param).then((res) => {
        // console.log(res)
        this.topicR = res.data.data
        this.torouter = res.config.params
      }).catch((error) => {
        console.log(error)
      })
    },
    times (item) {
      var time = new Date(item.last_reply_at)
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
    }
  },
  watch: {
    // 检测路由信息变化，重新发送请求
    $route: function () {
      // console.log(this.$route)
      this._getData()
    }
  }
}
</script>
<style type="text/css">
#main{
	width: 18.75rem;
	height: auto;
  margin-top: 11.0rem;
}
.parane{
	width: 18.25rem;
	height: auto;
	background: #fff;
	margin: 0 auto;
}
.celi{
  width: 17.25rem;
  height: 2.0rem;
  padding:0.5rem;
  clear: both;
  position: relative;
}
/*头像开始*/
.img{
  float: left;
}
.img>img{
  width: 1.5rem;
  height: 1.5rem;
}
/*头像结束*/
/*标题开始*/
.title{
  width:15.25rem;
  height: 1.5rem;
  float: left;
}
.title>span{
  font-size: 0.6rem;
  padding:0.1rem 0.2rem;
  background: #369219;
  border-radius: 0.25rem;
  margin-left: 10px;
  color:#fff;
  float: left;
}
.nowrap{
  display: inline-block;
  width: 12.0rem;
  height: 1.25rem;
  font-size: 0.7rem;
  color:#888;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  margin-left: 5px;
}
.title>.wod{
  background: #ccc;
}
/*标题结束*/
/*回复开始*/
.spab{
  display: inline-block;
  width: 3.5rem;
  height: 1.2rem;
  position: absolute;
  left: 4.0rem;
  top: 1.75rem;
  font-size: 0.6rem;
  color:#888;
}
/*回复结束*/
/*发帖时间开始*/
.time{
  display: inline-block;
  padding:0.25rem;
  font-size: 0.7rem;
  position: absolute;
  right: 1.0rem;
  top:1.0rem;
  line-height: 1.75rem;
}
/*发帖时间结束*/
</style>