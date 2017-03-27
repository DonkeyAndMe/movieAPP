<template>
	<div id="home">
		<lselect></lselect>
		<swiper></swiper>
		<hlist></hlist>
	</div>
</template>

<script>
import lselect from '../list/select.vue'
import swiper from '../home/swiper.vue'
import hlist from '../list/h-list.vue'
export default{
	data(){
		return{
	}
	},
	components: 
	{ swiper,
	  hlist,
	  lselect
	 }
	
}
</script>

<style>

</style>

