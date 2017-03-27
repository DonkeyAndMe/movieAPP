<template>
	<div class="c-item">
		<h4>
			<span class="title">唐阁影城</span>
			<span class="tip">座</span>
		</h4>
		<div class="address">
			<p class="info">滨江区浦沿路物美大卖场盒座社五楼唐阁影城</p>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="scss">
	.c-item{
		padding:10px 10px 12px;
		border-bottom: 1px solid #d6d6d6;
		h4{
			.title{
				float:left;
				display: inline-block;
				max-width:300px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.tip{
				    font-size: 11px;
				    background: #d92d2d;
				    display: inline-block;
				    margin: 4px 0 1px 6px;
				    padding: 3px;
				    width: 1em;
				    height: 1em;
				    overflow: hidden;
				    color: #fff;
				    border-radius: 2px;
				    line-height: 11px;
				    font-style: normal;
				    text-align: center;
				    vertical-align: top;
			}
		}
		.address{
			padding-top:20px;
			.info{
				color: #999;
			    font-size: 12px;
			    overflow: hidden;
			    white-space: nowrap;
			    text-overflow: ellipsis;
    			padding-right: 50px;
			}
		}
	}
</style>

