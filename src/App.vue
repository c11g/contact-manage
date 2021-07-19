<template>
  <div id="app">
    <search placeholder="두 글자 이상 입력 후 엔터" />
    <contact-list />
  </div>
</template>

<script>
import Search from '@/components/Search';
import ContactList from '@/components/ContactList';

export default {
  name: 'App',
  components: {
    Search,
    ContactList,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
