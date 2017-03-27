<template>
	<div id="about">
		<lselect></lselect>
		<citem></citem>
		<detail></detail>	
	</div>
</template>

<script>
import lselect from '../list/select.vue'
import citem from '../list/c-item.vue'
import detail from '../list/detail.vue'
export default{
	data(){
		return{
		}
	},
	components: { 
		citem,
		lselect,
		detail
	}
}
</script>

<style>

</style>

