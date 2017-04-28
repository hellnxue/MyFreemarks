<template>
　　<div class="sun">
　　　　<input type="button" name="" id="" @click="chilCall()" value="子调父" /> 
　　</div>
</template>
<script>
    export default {
        name: 'sun',
        'methods': {
            chilCall(pars) {
                this.$emit('newNodeEvent', '我是子元素传过来的')
            }
        }
    }
</script>