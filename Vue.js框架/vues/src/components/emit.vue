<template>
  <div class='cmpt'>
    <h4 style='background:yellow;'>子组件</h4>
    <h4>{{ msg }}</h4>
    <div >
      <button type='button' @click='funs()'>点击给父组件传值</button>
    </div>
    <fieldset>
      <legend>props:父组件给子组件传值</legend>
      <p>通过prop属性传值：&nbsp;&nbsp;&nbsp;{{pmsg}}</p>
      <p>动态Prop(动态给子组件传值)： &nbsp;&nbsp;&nbsp;{{myMsg}}</p>

      <h3>字面量语法VS动态语法所传值的类型</h3>
      <p>字面量语法 {{typeof ptMsg}}</p>
      <p>动态语法 {{typeof bindMsg}}</p>

       <p> {{variable}}</p>
      <button type='button' @click='dymProp()'>prop的属性在子组件中能不能改</button>
    </fieldset>

  </div>
</template>

<script>
import hello1 from './hello1.vue';

export default {
  name: 'hello',
  data () {
    return {
      msg: '子组件给父组件传值$emit',
      variable:''
    }
  },
  components:{
    hello1
  },
  methods:{
      funs:function(){
          var vm2=this;
          vm2.$emit('parentInfo','子组件给父组件传值');

      },
      dymProp:function(){
         var vm3=this;
         //vm3.ptMsg='update ptMsg value'  //!! prop属性的传值是单向的，只能父传子，子组件中不能修改奥~~~
         vm3.variable=vm3.ptMsg;

      }
  },
  //通过props属性，让父组件给子组件传值
  props:['pmsg','myMsg','ptMsg','bindMsg']
}
</script>

<style scoped>
.cmpt{
  border:5px solid pink;
  border-radius:4px;
}
</style>
