<template>
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
        
       <li><router-link to="/">to first Page</router-link></li>
       <li><div v-text="message"></div></li>
    </ul>

    <h4>-------------ref属性给元素注册引用(相当于引用DOM)----------</h4>
    <p  ref='myElDom'>test ref instruct</p>
    <button type='button' @click='refTest()'>ref：给元素注册引用</button>


    <h4>-------------ref与v-for指令组合使用----------</h4>
    <p v-for='item in items' v-bind:ref="'item'+item.id" @click="getName()">{{item.name}}</p>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome page Hello1 to Your Vue.js App',
      message:'v-text指令，绑定元素的文本内容',
      items:[
          {name:'he1',id:1},
          {name:'he2',id:2},
          {name:'he3',id:3},
      ]
    }
  },
  methods:{

      refTest:function(){
          var vm=this;
          var info=vm.$refs.myElDom.innerText;
          console.log(info);
      },
      getName:function(){
          var vm1=this;
          console.log(vm1.$refs);//指向myElDom
          var info=vm1.$refs.item1.innerText;//????undefined
          console.log(info);
      }

  }
}
</script>






<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
