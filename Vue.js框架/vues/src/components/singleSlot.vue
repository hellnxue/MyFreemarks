<template>
  <div  >
      <h2>-----单个slot-------</h2>
      <ul>
        <slot>
           <h4>最初在 &lt;slot&gt; 标签中的任何内容都被视为备用内容。备用内容在子组件的作用域内编译，并且只有在宿主元素为空，且没有要插入的内容时才显示备用内容。</h4>
        </slot>
      </ul>


  </div>
</template>

<script>

export default {
  name: 'slot',
  data () {
    return {
       
    }
  },
  components:{
  },
  methods:{
  } 
}
</script>

<style scoped>
 
</style>
