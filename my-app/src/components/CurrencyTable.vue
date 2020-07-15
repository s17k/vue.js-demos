<template>
  <div>
    <h1> This is a currency table </h1>
    <button v-on:click="handleUpdateAll">Update All!</button>
    <p>Total sum: {{Object.values(rates()).reduce((a,b)=>a+b)}}</p>
    <table>
        <tr v-for="(value, name) in rates()" :key="name">
            <th :style="styleSelector(value)"> {{name}}:</th>
            <th> {{value.toFixed(3)}}</th>
            <th> 
              <button v-on:click="handleclick(name)">Update!</button>
            </th>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CurrencyTable',
  props: {
    msg: String
  },
  data() {
    return {
      info: "Default Value",
      style1 : 'background-color: #42b983; border-radius: 25px;',
      style2 : 'background-color: #3aabff; border-radius: 25px;'
    }
  },
  methods: {
    rates() {
      return this.$store.state.rates
    },
    handleUpdateAll() {
        this.$store.commit('askapi')
    },
    handleclick(currency_name) {
        this.$store.commit('update_one', currency_name)
    },
    styleSelector(value) {
      return value > 0 ? this.style1 : this.style2
    }
  },
  mounted () {
    this.$store.commit('askapi')
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
table {
  margin-left: auto;
  margin-right: auto;
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


style2{
  background-color: #3aabff;
   border-radius: 25px;;

}
</style>
