<template>
	<div id="me">
		<lselect></lselect>
		<mitem></mitem>
		<movieinfo></movieinfo>
	</div>
</template>

<script>
import lselect from '../list/select.vue'
import mitem from '../list/m-item.vue'
import movieinfo from '../self/movieinfo.vue'
	export default{
		data: function () {
			return {
			}
		},
		components: {
			mitem,
			lselect,
			movieinfo
		}
	}
</script>

<style>
	
</style>
