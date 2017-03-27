<template>
	<div class="m-item">
		<ul>
			<li><span>我的记录</span><em class="icon">
				<img src="../../assets/img/kaola.svg" class="animal">
			</em></li>
			<li><span>我的浏览</span><em class="icon">
				<img src="../../assets/img/banma.svg" class="animal">
			</em></li>
			<li><span>我的喜欢</span><em class="icon">
				<img src="../../assets/img/hema.svg" class="animal">
			</em></li>
			<li><span>我的最爱</span><em class="icon">
				<img src="../../assets/img/pangxie.svg" class="animal">
			</em></li>
			<li><span>我的周边</span><em class="icon">
				<img src="../../assets/img/xiaoji.svg" class="animal">
			</em></li>
		</ul>
	</div>
</template>

<script>
	
</script>

<style lang='scss'>
	.m-item{
		ul{
			li{
				border-bottom: 1px solid #eee;
				padding: 7px 7px;
				overflow: hidden;
				span{
					float:left;
					margin-left: 2px;
				}
				em{
					float: right;
						.animal{
						width:1.25rem;
						height: 1.25rem;
						margin-right: 10px;
					}
				}
			}
		}
	}
</style>

