<template>
	<div class="nav-cft">
		<ul class="cft-li">
			<router-link to="/topic/all"><li>全部</li></router-link>
			<router-link to="/topic/good"><li>精华</li></router-link>
			<router-link to="/topic/weex"><li>weex</li></router-link>
			<router-link to="/topic/share"><li>分享</li></router-link>
			<router-link to="/topic/ask"><li>问答</li></router-link>
			<router-link to="/topic/job"><li>招聘</li></router-link>
		</ul>
	</div>
</template>
<script type="text/javascript">
</script>
<style type="text/css">
.nav-cft{
	width: 18.25rem;
	height: 2.0rem;
	margin: 0 auto;
	background: blue;
	position: fixed;
	top:8.55rem;
	left:0.25rem;
	background:#CCCCCC;
	border-bottom: 1px solid #ccc;
	z-index:999;
}
.cft-li{
	width: 17.25rem;
	height: 1.0rem;
	padding:0.5rem;
	background-color: #f6f6f6;
	clear: both;
}
.cft-li li{
	float: left;
	font-size: 0.7rem;
	line-height: 1.0rem;
	padding: 0.15rem 0.2rem;
	margin: 0 0.5rem;
	color:#369219;
}
.cft-li a.router-link-active li{
	background: #369219;
	color:#fff;
	border-radius: 5px;
}
</style>