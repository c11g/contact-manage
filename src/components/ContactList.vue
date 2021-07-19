<template>
  <table>
    <caption>CONTACTS</caption>
    <thead>
      <th scope="col">번호</th>
      <th scope="col">이름</th>
      <th scope="col">전화번호</th>
      <th scope="col">주소</th>
    </thead>
    <tbody>
      <tr v-if="contacts.length === 0">
        <td colspan="4">조회된 데이터가 없습니다.</td>
      </tr>
      <tr v-else v-for="{no, name, tel, address} in contacts" :key="no">
        <td>{{ no }}</td>
        <td>{{ name }}</td>
        <td>{{ tel }}</td>
        <td>{{ address }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'ContactList',
  computed: mapState(['contacts']),
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
caption {
  margin: 20px 0 5px;
  font-size: 1.2em;
  text-align: left;
}
th {
  background: coral;
  padding: 5px 0;
  color: #fff;
}
td {
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
  color: #777;
}
</style>