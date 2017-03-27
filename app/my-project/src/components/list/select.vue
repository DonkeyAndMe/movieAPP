<template>
	<div class="bar">
		<a href="javascript();" class="selec">
		<span>北京</span>
		<i class="icon"><img src="../../assets/img/down.svg" alt=""></i>
		</a>
		<a href="javascript();" class="mine">
			<em>
				<img src="../../assets/img/wode.svg" alt="">
			</em>
		</a>
	</div>
</template>

<script>
	
</script>

<style lang='scss'>
	.bar{
		padding: 6px 10px 6px 7px;
	    height: 38px;
	    background: #df2d2d;
	    overflow: hidden;
	    .selec{
			float: left;
		    margin: 6px 0 0 4px;
		    padding: 4px;
		    color: #FFF;
		    font-size: 16px;
		    line-height: 18px;
		    border-radius: 2px;
		    .icon{
		    	float:right;
		    	img{
		    		width: 1.1rem;
	    			height: 1.1rem;
	    			margin: 1px 0 0 3px;
		    	}
		    	
		    }
	    }
	    .mine{
	    	float: right;
	    	width: 1.3rem;
	    	height: 1.3rem;
	    	em{
	    		img{
	    			color:#fff;
	    			margin: 8px 10px 0 0;
	    		}
	    	}
	    }
	}
</style>