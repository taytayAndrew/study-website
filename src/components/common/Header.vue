<template>
	<header>
		<div class='header-main'>
			<div class='header-l'>
				<h1 class='logo'>
					<img src="@/assets/img/header1.png" />
				</h1>
				<ul>
					<li class='active'>首 页</li>
					<li>课 程</li>
					<li>会 员</li>
				</ul>
			</div>
			<div class='header-r'>
				<div class='search'>
					<input type="text" placeholder="搜索想要的课程" />
					<el-icon color='#999' :size='20'><Search /></el-icon>
				</div>
				<div class='shop'>
					<el-icon :size='20'><ShoppingCart /></el-icon>
				</div>
				<div class='login'>
					登录/注册
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
//element
import { Search , ShoppingCart } from '@element-plus/icons-vue'
</script>
<style scoped>
header{
	width: 100%;
	height: 80px;
}
.header-main{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	height: 80px;
	margin: 0 auto;
}
.header-l {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.logo{
	width: 90px;
	height: 75px;
	margin-right: 80px;
}
.logo img{
	width: 100%;
	height: 100%;
}
.header-l ul{
	display: flex;
	height: 50px;
}
.header-l ul li{
	line-height: 50px;
	font-weight: 500;
	cursor: pointer;
}
.header-l ul li + li{
	margin-left: 79px;
	font-size: 16px;
	color: #808080;
}
.active{
	position: relative;
	color: #3585FF;
}
.active:after{
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 140%;
	margin-left: -20%;
	height: 3px;
	background: #3585FF;
}

.header-r{
	display: flex;
	align-items: center;
}
.header-r .search{
	display: flex;
	align-items: center;
	padding: 0 10px;
	width: 300px;
	height: 43px;
	background: #F0F2F4;
	border-radius: 5px;
}
.header-r .search input{
	width: 270px;
	height: 43px;
	border: none;
	background: transparent;
	outline: none;
}
.header-r .shop{
	display: flex;
	align-items: center;
	margin-left: 42px;
}
.header-r .login{
	margin-left: 39px;
	font-size: 16px;
	color: #808080;
	cursor: pointer;
}
</style>

