<template>
  <div class="pApp">
     <button type="button" @click="test">vue事件</button>
     <!-- 子组件给父组件传值 -->
　　 <sun @newNodeEvent="parentLisen" />
    
     <input type="text" name="name" v-model='parentMsg'>
      <!-- 父组件给子组件传值 -->
     <sun  message="父组件给子组件传值喽，好大方的啦，哈哈" :dynamic-msg="parentMsg" :type="true"/>
  </div>
</template>
<script>
    import sun from './sun'
    export default {
        name: 'pApp',
        data(){
            return {
                parentMsg:"abc123" 
            }
        },

        'components': {
            sun
        },

        methods: {

            /*vue自定义事件----子元素给父元素传值*/
            parentLisen:function(evtValue) {    
                //evtValue 是子组件传过来的值
                console.log('hehe'+evtValue)
            },
            /*vue事件*/
            test:function(e){
                var domThis=e.currentTarget;
                console.log("DOM="+domThis.innerText);
            }
        }
    }
</script>
<style scoped>
 
</style>
