<template>
	<div class="navbar">
		<!-- 导航条的容器开始 -->
		<div class="navbar-inner">
			<!-- Logo开始 -->
			<router-link to="/topic/all" class="logo">
				<img src="../../assets/logo.png">
				Vue.js
			</router-link>
			<!-- logo结束 -->
			<!-- 搜索框开始 -->
			<form class="from">
				<input type="text" name="">
			</form>
			<!-- 搜索框结束 -->
			<!-- 导航列表开始 -->
			<ul class="nav-ul">
				<router-link to="/topic/all"><li>首页</li></router-link>
				<a href="#"><li>交互教程</li></a>
				<a href="#"><li>微信公众号</li></a>
				<a href="#"><li>VUE 2.0</li></a>
				<a href="#"><li>参考资料</li></a>
				<a href="#"><li>API</li></a>
				<a href="#"><li>关于</li></a>
				<a href="#"><li>注册</li></a>
				<a href="#"><li>登录</li></a>
			</ul>
			<!-- 导航列表结束 -->
		</div>
		<!-- 导航条的容器结束 -->
	</div>
</template>
<script type="text/javascript">

</script>
<style type="text/css">
	html{
		font-size: 20px;
	}
	.navbar{
		width: 18.25rem;
		height: 8.55rem;
		background: #1c6132;
		margin: 0 auto;
		margin-bottom: 10.55rem;
		position: fixed;
		top:0;
		left: 0.25rem;
		z-index: 100;
	}
	/*导航条容器开始*/
	.navbar-inner{
		width: 16.425rem;
		height: 8.05rem;
		padding:0.25rem;
		margin: 0 auto;
	}
	/*导航条容器结束*/
	/*logo开始*/
	.logo{
		display: block;
		width: 6.0rem;
		height: 2.25rem;
		margin: 0 auto;
		padding: 0 1.0rem;
		line-height: 2.25rem;
		font-size: 1.1rem;
		color: #fff;
		font-weight: 800;
		clear:both;
	}
	.logo>img{
		height: 100%;
		float: left;
	}
	/*loga结束*/
	/*搜索框开始*/
	.from{
		width: 16.425rem;
		height: 1.3rem;
		margin: 0 auto;
	}
	.from>input{
		width: 10.3rem;
		height: 1.0rem;
		padding: 3px 5px 3px 22px;
    color: #666;
    border: 0;
    outline: none;
    display: block;
    margin: 0 auto;
    background: #4f9639 url(../../assets/images/search.png) no-repeat 4px 4px;
    border-radius: 0.75rem;
	}
	/*搜索框结束*/
	/*导航列表开始*/
	.nav-ul li{
		float: left;
		font-size: 0.7rem;
		padding: 0.5rem 0.75rem;
		color:#fff;
	}
	/*导航列表结束*/
</style>