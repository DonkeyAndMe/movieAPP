<template>
	<div class="item">
		<div class="list-item">
			<div class="tip"></div>
			<div class="content">
				<div class="con-left">
					<img src="../../assets/img/dog.jpg" alt="影片信息">
				</div>
				<div class="con-center">
					<h4 class="introduce">
					<span class="title">一条狗的使命</span>
					<span class="move-tag">2D-Max</span>
					</h4>
					<p class="describe">{{describe}}</p>
					<p class="info">今天20家影院放映40场</p>
				</div>
				<div class="con-right">
					<span class="number">9.3分</span>
					<a href="https://www.baidu.com" class="ticket">购票</a>
				</div>
			</div>
		</div>
		
		<!-- empty div -->
		<div class="empty">
			
		</div>
	</div>
</template>

<script>

</script>

<style lang="scss">
	.item{
		// padding: 10px 10px 12px;
  //   	border-bottom: 1px solid #d6d6d6;
  //   	overflow:hidden;
    	.list-item{
    		padding: 10px 10px 12px;
    		border-bottom: 1px solid #d6d6d6;
    		overflow:hidden;
	    		.tip{
			}
			.content{
				.con-left{
					float:left;
					img{
						max-width:61px;
						max-height:84px;
					}
				}
				.con-center{
					float:left;
					margin-left:5px;
					.introduce{
						padding:0 2px 4px;
						.title{
							font-size:16px;
							color:#000;
						}
						.move-tag{
							display:inline-block;
							padding: 0px 4px 2px;
							border-radius:3px;
							background-color:#2895db;
							font-size:11px;
							text-align:center;
							height:14px;
							line-height:17px;
							color:#fff;
							margin-left:4px;
						}
					}
					.describe{
						color:#666;
						overflow: hidden;
					    text-overflow: ellipsis;
					    white-space: nowrap;
					    font-size:15px;
					}
					.info{
						margin-top:5px;
						font-size:12px;
						padding:3px 0;
						color:#666;
						overflow: hidden;
					    text-overflow: ellipsis;
					    white-space: nowrap;
					}
				}
				.con-right{
					float:right;
					text-align:right;
					.number{
						display:block;
						color: #ff9a00;
					    font-size: 18px;
					    line-height: 24px;
					    white-space: nowrap;
					}
					.ticket{
						display:block;
						font-size: 13px;
						margin-top:20px;
					    padding: 4px 17px;
					    background-color: transparent;
					    border-radius: 4px;
					    border: 1px solid #e54847;
					    color: #e54847;
					    display: inline-block;
					    vertical-align: top;
					    white-space: nowrap;
					}
				}
			}
    	}
    	.empty{
    		height:49px;
    	}
		
	}
</style>
