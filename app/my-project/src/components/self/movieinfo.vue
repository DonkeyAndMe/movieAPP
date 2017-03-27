<template>
	<div class="movie-info">
		<div class="info-up">
			<h2 class="name-address ell">唐阁影城杭州滨江店</h2>
			<p class="introduce ell">杭州滨江区浦沿路物美大卖场盒座社五楼唐阁影城</p>
		</div>

		<div class="info-pic">
			<ul class="zone">
				<li class="pic">
					<a href="javascript:void();">
						<img src="../../assets/img/gakki1.jpg" alt="">
					</a>
				</li>
				<li class="pic">
					<a href="javascript:void();">
						<img src="../../assets/img/gakki1.jpg" alt="">
					</a>
				</li>
				<li class="pic">
					<a href="javascript:void();">
						<img src="../../assets/img/gakki1.jpg" alt="">
					</a>
				</li>
				<li class="pic">
					<a href="javascript:void();">
						<img src="../../assets/img/gakki1.jpg" alt="">
					</a>
				</li>
				<li class="pic">
					<a href="javascript:void();">
						<img src="../../assets/img/gakki1.jpg" alt="">
					</a>
				</li>
				<li class="pic">
					<a href="javascript:void();">
						<img src="../../assets/img/gakki1.jpg" alt="">
					</a>
				</li>
				<li class="pic">
					<a href="javascript:void();">
						<img src="../../assets/img/gakki1.jpg" alt="">
					</a>
				</li>
			</ul>
		</div>

		<div class="info-title">
			<p class="name">一条狗的使命</p>
			<span class="number">9.2分</span>
		</div>

		<div class="info-data">
			<a href="JavaScript:void();" class="now">今天</a>
			<a href="JavaScript:void();" class="tomorrow">明天</a>
		</div>

		<div class="info-list">
			<table>
				<tbody>
					<tr>
						<td class="time">
							<div class="time-wrap">
								<strong class="start-time">17:35</strong>
								<em class="end-time">19:20结束</em>
							</div>
						</td>
						<td class="info">
							<div class="info-wrap">
								<strong class="info-e">英语3D</strong>
								<em class="room">1号厅</em>
							</div>
						</td>
						<td class="price">
							<div class="price-wrap">
								<strong class="price-num">33元</strong>
							</div>
						</td>
						<td class="zuowei">
							<div class="zuowei-wrap">
								<a href="javascript:void()">选座购票</a>
							</div>
						</td>
					</tr>
					<tr>
						<td class="time">
							<div class="time-wrap">
								<strong class="start-time">17:35</strong>
								<em class="end-time">19:20结束</em>
							</div>
						</td>
						<td class="info">
							<div class="info-wrap">
								<strong class="info-e">英语3D</strong>
								<em class="room">1号厅</em>
							</div>
						</td>
						<td class="price">
							<div class="price-wrap">
								<strong class="price-num">33元</strong>
							</div>
						</td>
						<td class="zuowei">
							<div class="zuowei-wrap">
								<a href="javascript:void()">选座购票</a>
							</div>
						</td>
					</tr>
					<tr>
						<td class="time">
							<div class="time-wrap">
								<strong class="start-time">17:35</strong>
								<em class="end-time">19:20结束</em>
							</div>
						</td>
						<td class="info">
							<div class="info-wrap">
								<strong class="info-e">英语3D</strong>
								<em class="room">1号厅</em>
							</div>
						</td>
						<td class="price">
							<div class="price-wrap">
								<strong class="price-num">33元</strong>
							</div>
						</td>
						<td class="zuowei">
							<div class="zuowei-wrap">
								<a href="javascript:void()">选座购票</a>
							</div>
						</td>
					</tr>
					<tr>
						<td class="time">
							<div class="time-wrap">
								<strong class="start-time">17:35</strong>
								<em class="end-time">19:20结束</em>
							</div>
						</td>
						<td class="info">
							<div class="info-wrap">
								<strong class="info-e">英语3D</strong>
								<em class="room">1号厅</em>
							</div>
						</td>
						<td class="price">
							<div class="price-wrap">
								<strong class="price-num">33元</strong>
							</div>
						</td>
						<td class="zuowei">
							<div class="zuowei-wrap">
								<a href="javascript:void()">选座购票</a>
							</div>
						</td>
					</tr>
					<tr>
						<td class="time">
							<div class="time-wrap">
								<strong class="start-time">17:35</strong>
								<em class="end-time">19:20结束</em>
							</div>
						</td>
						<td class="info">
							<div class="info-wrap">
								<strong class="info-e">英语3D</strong>
								<em class="room">1号厅</em>
							</div>
						</td>
						<td class="price">
							<div class="price-wrap">
								<strong class="price-num">33元</strong>
							</div>
						</td>
						<td class="zuowei">
							<div class="zuowei-wrap">
								<a href="javascript:void()">选座购票</a>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- empty data -->
		<div class="empty"></div>
	</div>
</template>


<script>
	
</script>

<style lang="scss">
	.movie-info{
		.info-up{
			padding: 10px;
			border-bottom:1px solid #eee;
			.ell{
				text-overflow: ellipsis;
			    overflow: hidden;
			    white-space: nowrap;
			}
			.name-address{
				color: #333;
    			line-height: 1.7;
			}
			.introduce{
				color: gray;
    			line-height: 1.7;
    			font-size:12px;
			}
		}

		.info-pic{
			overflow-x:scroll;
			padding: 0 10px;
			.zone{
				overflow:hidden;
				width:800px;
				.pic{
					float:left;
					margin:15px 5px 10px 0;
					a{
						display:inline-block;
						img{
							width:65px;
							height:90px;
						}
					}
				}
				
			}
		}
		.info-title{
			padding:10px;
			height:29px;
			line-height:29px;
			border-bottom:1px solid #eee;
			.name{
				float:left;
				color:#333;
				font-size:14px;
			}
			.number{
				margin-left:7px;
				color:#F07C0A;
				font-size:14px;
			}
		}
		.info-data{
		    padding: 10px 0;
		    height: 26px;
		    width: 100%;
		    border: 0 solid #ccc;
		    border-width: 1px 0;
		    background: #efefef;
		    position: relative;
		    a{
	    	float: left;
		    width: 100px;
		    text-align: center;
		    line-height: 26px;
		    font-size: 16px;
		    color: #666;
		    text-decoration: none;
		    padding: 0 8px;
		    white-space: nowrap;
		    border-radius: 13px;
		    margin:0 10px;
		    	&.active{
		    		color:#fff;
					background-color:#f00;
		    	}
		    }
		}
		.info-list{
			table{
				width:100%;
				height:56px;
				tbody{
					tr{
						overflow:hidden;
						border-bottom:1px solid #eee;
						td{
							float:left;
						    text-align: center;
						    vertical-align: middle;
						    height:56px;
						}
						.time{
							color: #df2d2d;
						    font-size: 20px;
						    line-height: 22px;
						    background:url('../../assets/img/iconright.png') 100% center no-repeat;
						    background-size: 3px 49px;
						    padding:10px 0 0 15px;
						    .start-time{
						    	display:block;
						    	color: #df2d2d;
    							font-size: 20px;
    							margin:4px 15px 0 0;

						    }
						    .end-time{
						    	display: block;
							    font-size: 12px;
							    color: #9a9a9a;
							    font-style: normal;
							    margin-right:15px;
						    }
						}
						.info{
							color: #df2d2d;
						    font-size: 20px;
						    line-height: 22px;
						    padding:10px 0 0 15px;
						    margin-left: 30px;
						    .info-e{
					    	    max-width: 180px;
							    overflow: hidden;
							    white-space: nowrap;
							    text-overflow: ellipsis;
							    font-size: 14px
						    }
						    .room{
						    	display: block;
							    font-size: 12px;
							    color: #9a9a9a;
							    font-style: normal;
							    margin-right:15px;
						    }
						}
						.price{
							color: #df2d2d;
						    font-size: 20px;
						    line-height: 45px;
						    padding:10px 0 0 15px;
						    margin-left: 30px;
						    .price-num{
						    	display: block;
							    font-size: 24px;
							    color: #9a9a9a;
							    font-style: normal;
							    margin-right:15px;
							    color:#f00;
						    }
						}
						.zuowei{
							 padding:10px 0 0 15px;
						   	 margin-left: 30px;
						   	 .zuowei-wrap{
						   	 	margin-top:13px;
						   	 	a{
					   	 		    font-size: 13px;
								    background: #e64847;
								    padding: 8px 10px;
								    border-radius: 4px;
								    color: #fff;
								    white-space: nowrap;
						   	 	}
						   	 }
						}
					}
				}
			}
		}
		.empty{
			height:49px;
		}
	}
</style>

