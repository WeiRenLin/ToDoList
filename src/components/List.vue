<template>
  <div class="todo">
       <Head :msg="title"></Head>
    <input type="text" v-model="newData" @keyup.enter="createNewToDo" />
    <ul>
      <li
        v-for="(item,index) in items"
        :key="index"
        v-bind:class="{todo__finish:item.isFinished}"
        @click="toggleFinish(item)"
      >{{item.text}}</li>
    </ul>
  </div>
</template>
<script>
import Head from './Header'
export default {
  name: "List",
  components:{Head},
  data() {
    //es6
    return {
      title: "ToDoList", //標題
      items: [{
        text:''
      }],
      newData: ""
    };
  },
  methods: {
    toggleFinish: function(item) {
      item.isFinished = !item.isFinished;
    },
    createNewToDo: function() {
      this.items.push({ text: this.newData, isFinished: false });
      this.$emit("getMsg", this.newData);
      //輸入完清空文字
      this.newData = "";
    }
  }
};
</script>

