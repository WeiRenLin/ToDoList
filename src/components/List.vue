<template>
  <div class="view">
    <h1 class="title">{{title}}</h1>
    <input type="text" v-model="newData" @keyup.enter="createNewToDo" />
    <ul>
      <li
        v-for="(item,index) in items"
        :key="index"
        v-bind:class="{finish:item.isFinished}"
        @click="toggleFinish(item)"
      >{{item.text}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "List",
  data() {
    //es6
    return {
      title: "ToDoList", //標題
      items: [
        {
          //待辦事項
          text: "今天晚上7點跑步",
          isFinished: false
        },
        {
          text: "今天早餐吃饅頭",
          isFinished: true
        }
      ],
      newData: ""
    };
  },
  methods: {
    toggleFinish: function(item) {
      item.isFinished = !item.isFinished;
    },
    createNewToDo: function() {
      this.items.push({ text: this.newData, isFinished: false });
      //輸入完清空文字
      this.newData = "";
    }
  }
};
</script>

