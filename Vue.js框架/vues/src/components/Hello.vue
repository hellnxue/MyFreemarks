<template >
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>

      <!--路由页面跳转-->
      <li><router-link to="/h1">to Hello1 Page</router-link></li>

       <!--路由页面跳转-->
      <li><router-link to="/papp">子组件传递数据给父组件</router-link></li>
    </ul>

    <button type='button' @click='ftos()' id='fwf'>父组件访问子组件的元素</button>

    <div class='cmpt'>
      动态Prop
      <input name='vl' v-model='parentMsg'/>
      <emit v-on:parentInfo='parentFun' pmsg='这是父组件传过来的值' :my-msg='parentMsg' :bind-msg='100' pt-msg='100' >
        <p class='slot'>当子组件模板只有一个没有属性的 slot 时，父组件整个内容片段将插入到 slot 所在的 DOM 位置，并替换掉 slot 标签本身</p>
        <h1 slot='header'>具名slot-这里可能是一个页面标题</h1>
        <p slot="footer">具名slot-这里有一些联系信息</p>

        <!--
          在父级中，具有特殊属性 scope 的 <template> 元素，表示它是作用域插槽的模板。scope 的值对应一个临时变量名，此变量接收从子组件中传递的 prop 对象


          为啥渲染的时候会有两个hello from parents???????
        -->
        <template scope="props">
          <p class='tsolt'>hello from parents</p>
          <p class='tsolt'>{{ props.text }}</p>
        </template>

      </emit>


      <slot-test>
        <!-- 作用域插槽也可以是具名的 -->
        <template slot="item" scope="props" >

            <li class="my-fancy-item">{{ props.text }}</li>

        </template>
      </slot-test>
    </div>

   <p class='myColor'>scope作用域中的样式测试-父组件</p>


   <!--动态组件-->
   <div style='border:5px solid pink;background-color:#abc;'>

      <!-- 组件在 vm.currentview 变化时改变！ 通过使用保留的 <component> 元素，动态地绑定到它的 is 特性，我们让多个组件可以使用同一个挂载点，并动态切换 -->
      <component v-bind:is="currentView">
        
      </component>
   </div>

   <single>
    
   </single>
  </div>
</template>

<script>
import emit from './emit.vue';
import slotTest from './slot.vue';
import single from './singleSlot.vue';

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your first page',
      parentMsg:'hello sir',
      currentView:'slotTest'//动态组件
    }
  },
  components:{
    emit,slotTest,single
  },
  methods:{
    parentFun:function(data){
      console.log('父组件：'+data);
    },
    ftos:function(){
      var text=document.getElementById('cmptTest').innerText;
      console.log(text);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  look class myColor -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.myColor{
  background:blue;
  color:yellow;
}

.slot{
  border:5px solid yellow;
  border-radius:10px;
  color:green;
}

.tsolt{
  font-size:30px;
  color:#9B5151;
}

</style>
