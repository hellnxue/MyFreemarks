<template>
  <div class='cmpt'>
      <h2>slot测试</h2>
      <ul>
        <slot name="item" v-for="item in items" :text="item.text">
          <!-- 这里写入备用内容 -->
        </slot>
      </ul>


  </div>
</template>

<script>

export default {
  name: 'slot',
  data () {
    return {
      items:[
        {text:'hello a'},
        {text:'hello b'},
        {text:'hello c'}
      ]
    }
  },
  components:{
  },
  methods:{
  } 
}
</script>

<style scoped>
.cmpt{
  border:5px solid yellow;
  border-radius:4px;
}
</style>
