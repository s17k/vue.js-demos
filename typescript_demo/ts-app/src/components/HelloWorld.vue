<template>
  <div class="hello">
    <RandomCat msg="This is a very nice message"></RandomCat>
    <CurrencyTable> </CurrencyTable>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import RandomCat from '@/components/RandomCat.vue'
import CurrencyTable from '@/components/CurrencyTable.vue'
import Vuex from 'vuex'
Vue.use(Vuex)

@Component({
  components: {
    RandomCat,
    CurrencyTable
  }
})
export default class HelloWorld extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
