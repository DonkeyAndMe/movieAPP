<template>
	<div class="list">
		<div class="list-one">
			<div class="moive-info">
				<div class="pic">
					<img src="../../assets/img/dogdog.jpg" alt="">
				</div>
				<dl class="info-right">
					<dt>一条狗的使命</dt>
					<dd>A Dog's Purpose</dd>
					<dd>剧情 喜剧</dd>
					<dd>美国 | 101分钟</dd>
					<dd>2017-03-03 在中国上映</dd>
				</dl>
			</div>

			<div class="moive-text">
				<p class="text">故事以汪星人的视角展现狗狗和人类的微妙情感，一只狗狗陪伴小主人长大成人，甚至为他追到了女朋友，后来它年迈死去又转世投胎变成其他性别和类型的汪，第二次轮回狗狗变成了警犬威风凛凛，再次转轮回，又成了陪伴一位大龄单身女青年的小柯基犬。在经历了多次轮回之后，最终回到最初的主人身边的故事。</p>
				<a href="javscript:void();" class="open">展开</a>
			</div>
		</div>

		<div id="wrapper">
			<h2>演员列表</h2>
			<ul>
				<li>
					<a href="javascript:void();" class="pic">
					<img src="https://img.alicdn.com/bao/uploaded/i3/TB1MkfAKpXXXXaAXVXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg" alt="">
					<h4 class="name">尼古拉斯~赵四</h4>
					<span class="career">导演</span>
					</a>
				</li>
				<li>
					<a href="javascript:void();" class="pic">
					<img src="https://img.alicdn.com/bao/uploaded/i3/TB1MkfAKpXXXXaAXVXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg" alt="">
					<h4 class="name">尼古拉斯~赵四</h4>
					<span class="career">导演</span>
					</a>
				</li>
				<li>
					<a href="javascript:void();" class="pic">
					<img src="https://img.alicdn.com/bao/uploaded/i3/TB1MkfAKpXXXXaAXVXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg" alt="">
					<h4 class="name">尼古拉斯~赵四</h4>
					<span class="career">导演</span>
					</a>
				</li>
				<li>
					<a href="javascript:void();" class="pic">
					<img src="https://img.alicdn.com/bao/uploaded/i3/TB1MkfAKpXXXXaAXVXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg" alt="">
					<h4 class="name">尼古拉斯~赵四</h4>
					<span class="career">导演</span>
					</a>
				</li>
			</ul>
		</div>

		<div id="wrapper">
			<h2>剧照</h2>
			<ul>
				<li>
					<a href="javascript:void();" class="pic">
					<img src="https://img.alicdn.com/bao/uploaded/i3/TB1MkfAKpXXXXaAXVXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg" alt="">
					<h4 class="name">尼古拉斯~赵四</h4>
					<span class="career">导演</span>
					</a>
				</li>
				<li>
					<a href="javascript:void();" class="pic">
					<img src="https://img.alicdn.com/bao/uploaded/i3/TB1MkfAKpXXXXaAXVXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg" alt="">
					<h4 class="name">尼古拉斯~赵四</h4>
					<span class="career">导演</span>
					</a>
				</li>
				<li>
					<a href="javascript:void();" class="pic">
					<img src="https://img.alicdn.com/bao/uploaded/i3/TB1MkfAKpXXXXaAXVXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg" alt="">
					<h4 class="name">尼古拉斯~赵四</h4>
					<span class="career">导演</span>
					</a>
				</li>
				<li>
					<a href="javascript:void();" class="pic">
					<img src="https://img.alicdn.com/bao/uploaded/i3/TB1MkfAKpXXXXaAXVXXXXXXXXXX_!!0-item_pic.jpg_400x400q60.jpg" alt="">
					<h4 class="name">尼古拉斯~赵四</h4>
					<span class="career">导演</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="footer">
			<a href="javascript:void();">选座购票</a>
		</div>
		<!-- empty div -->
		<div class="empty">
			
		</div>
	</div>
</template>

<script>
	
</script>

<style lang='scss'>
	.list{
		.list-one{
			.moive-info{
				height: 220px;
				background:url('../../assets/img/bc-blue.png') center center / cover no-repeat rgb(204, 204, 204);
				.pic{
					float: left;
					left: 25px;
					margin: 33px 0 0 25px;
					img{
						max-width: 130px;
						max-height: 190px;
					}
				}
				.info-right{
					float: left;
					margin: 25px 0 0 15px;
					color: #fff;
					dt{

					}
					dd{
						margin-top:8px;
						font-size: 0.75rem;
					}
				}
			}
			.moive-text{
				    padding-left: 16px;
				    padding-right: 3px;
				    border-bottom: 1px solid #e2e2e2;
				    margin-top: 1.5rem;
				    padding-bottom: 10px!important;
				.text{
					word-break: break-word;
					line-height: 7.5vmin;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp:3;
					-webkit-box-orient: vertical;
					font-size: 0.9rem;
				}
				.open{
					font-size: 0.9rem;
					margin:20px 0;
					display: inline-block;
					color: #333;
					width: 95%;
					text-align: center;
				}
			}
		}
		#wrapper{
			padding-left: 16px;
		    border-bottom: 1px solid #e2e2e2;
		    margin-top: 1rem;
		    margin-top: 5vmin;
		    padding-bottom: 10px!important;
		    overflow-x: scroll;
		    h2{
		    	font-size: .9375rem;
			    line-height: 2rem;
			    line-height: 10vmin;
			    color: #000;
			    font-weight: bold;
		    }
			ul{
				width: 500px;
				white-space: nowrap;
				li{
					float: left;
					width: 111px;
					height: 240px;
					margin: 10px 6px 0 0;
					.pic{
						text-align: center;
						img{
							height: 168px;
						}
						.name{
							display: block;
						    color: #333;
						    font-size: .875rem;
						    line-height: 1rem;
						    line-height: 5vmin;
						    max-height: 2rem;
						    max-height: 10vmin;
						    white-space: initial!important;
						    word-wrap: break-word;
						    position: relative;
						    width: auto;
						    overflow: hidden;
						    text-overflow: ellipsis;
						}
						.career{
							display: block;
						    white-space: nowrap!important;
						    overflow: hidden;
						    text-overflow: ellipsis;
						    height: 1rem;
						    height: 5vmin;
						    line-height: 1rem;
						    line-height: 5vmin;
						    color: #999;
    						font-size: .75rem;
						}
					}
				}
			}
		}
		#wrapper{
			padding-left: 16px;
		    border-bottom: 1px solid #e2e2e2;
		    margin-top: 1rem;
		    margin-top: 5vmin;
		    padding-bottom: 10px!important;
		    overflow-x: scroll;
		}
		.footer{
			text-align: center;
			padding: 10px;
    		margin-top: 26px;
			a{
				display: block;
			    width: 100%;
			    height: 42px;
			    line-height: 42px;
			    font-size: 1rem;
			    color: #fff;
			    background-color: #f00;
			    border-radius: 4px; 
			}
		}
		.empty{
			height: 49px;
		}
	}
</style>
