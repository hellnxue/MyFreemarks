<template>
  <div class="pApp">
　　 <hello @newNodeEvent="parentLisen" />
  </div>
</template>
<script>
    import sun from './sun'
    export default {
        name: 'pApp',
        'components': {
            sun
        },
        methods: {
            parentLisen(evtValue) {    
                //evtValue 是子组件传过来的值
                console.log(evtValue)
            }
        }
    }
</script>
<style scoped>
 
</style>
