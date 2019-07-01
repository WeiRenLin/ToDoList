<template>
  <div id="app">
    <Head :msg="title"></Head>
    <List @getMsg="getMsgData"></List>
  </div>
</template>

<script>
import List from "./components/List";
import Head from "./components/Header";
export default {
  name: "app",
  components: { Head, List },
  data() {
    return {
      title: "待辦事項"
    };
  },
  methods: {
    getMsgData(msg) {
      console.log(msg + "物件傳遞成功");
    }
  }
};
</script>

