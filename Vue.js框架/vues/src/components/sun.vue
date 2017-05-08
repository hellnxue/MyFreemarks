<template>
　　<div class="sun">
　　　　<input type="button" name="" id="" @click="chilCall()" value="子组件给父组件传值" /> 
		<div class="pts">
			<!-- 父传子：字面量语法 -->
			<p>此处是父组件通过props给子组件传的值：{{message}}</p>
			<!-- 父传子：动态语法 -->
			<p>动态props：{{dynamicMsg}}</p>


			<p>动态props 可传递基本类型值奥，而不是单纯的字符串：{{typeof type}}</p>
		</div>
　　</div>
</template>
<script>
    export default {
        name: 'sun',
        props:[
            'message','dynamicMsg','type'
        ],
        'methods': {
        	 /*vue自定义事件----子元素给父元素传值*/
            chilCall(pars) {
                this.$emit('newNodeEvent', '我是子元素传过来的')
            }
        }
    }
</script>
<style type="text/css">
	.pts{
		min-height: 20px;
		border:1px solid #e3e3e3;
		padding: 20px;
		margin: 20px;
		border-radius: 6px;
		box-shadow: 0 1px 1px rgba(0,0,0,0.05) inset;
		background: #f5f5f5;
	}
</style>