<template>
  <div>
    <input type="text"
      :placeholder="placeholder"
      v-model.trim="input"
      @keyup.enter="updateInput"
    />
  </div>
</template>

<script>
import {SEARCH_CONTACT} from '@/constant';

export default {
  name: 'Search',
  props: {
    placeholder: String,
  },
  data(){
    return {
      input: '',
    };
  },
  methods: {
    updateInput(){
      if (!this.input || this.input.length < 2) return;
      this.$store.dispatch(SEARCH_CONTACT, {name: this.input});
      this.input = '';
    }
  }
}
</script>

<style lang="scss" scoped>

</style>