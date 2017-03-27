<template>		
	<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for='item in imgs'>
       		<img :src="item.baseUrl" class="swiper-img">   		
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
<!--     <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
    
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
</div>
</template>

<script>
	import Swiper from 'swiper'
	export default{
		name: 'Swiper',
		data(){
			return{
				imgs:[{
					baseUrl:'http://hbimg.b0.upaiyun.com/d5da4a032d1624781a0a6cf5ff25243b4cc4a987213715-X769uv_fw658'
				},{
					baseUrl:'http://img.hb.aicdn.com/778fdbf492957d0412dec9ba06ac25f6095209117bddf-uVrnYf_fw658'
				},{
					baseUrl:'http://img.hb.aicdn.com/046271b8ec867930fe780f45b5cc8988b7a4060c2ce0b9-je3gYI_fw658'
				}]
			}
		},
		mounted(){
			this.$nextTick(() => {
		  	new Swiper ('.swiper-container', {
			    loop: true,
			    pagination: '.swiper-pagination',
			    paginationClickable: true,
			    autoplay : 4000,
				autoplayDisableOnInteraction : false,		    
			}) 
  		})
			
		}
	}
</script>

<style>
.swiper-slide{
	max-height: 166px;
}
.swiper-img{
	max-height: 166px;
}
</style>
