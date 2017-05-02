<template>
  <div class='cmpt'>
    <!--具名Slot-->
    <slot name='header'></slot>

    <h4 style='background:yellow;' id="cmptTest">子组件</h4>
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


      <button type='button' @click='fwffn()'  >子组件访问父组件的元素</button>

      <p class='myColor'>scope作用域中的样式测试-子组件</p>
    </fieldset>
      <!--单个Slot-->
      <slot>
        只有在没有要分发的内容时才会显示。
      </slot>

      <!--具名Slot-->
      <slot name='footer'></slot>

      
      <!--作用域插槽-->
      <slot text='slot from child'></slot>


      <ul>
        <slot name="item" v-for="item in items" :text="item.text">
          <!-- 这里写入备用内容 -->
        </slot>
      </ul>


  </div>
</template>

<script>
import hello1 from './hello1.vue';

export default {
  name: 'hello',
  data () {
    return {
      msg: '子组件给父组件传值$emit',
      variable:'',
      items:[
        {text:'hello a'},
        {text:'hello b'},
        {text:'hello c'}
      ]
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

      },
      fwffn:function(){
        var text=document.getElementById('fwf').innerText;
        console.log(text);
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
