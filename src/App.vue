<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <CurrencyTable/>
    <HelloWorld msg="hihi"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CurrencyTable from './components/CurrencyTable.vue'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    rates : {"USD":13},
    time_last_update_utc : null
  },
  mutations: {
    askapi (state) {
      console.log('Asking the API and updating the table')
      fetch('https://open.exchangerate-api.com/v6/latest')
        .then(function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
              state.rates = data.rates
              for(const key in state.rates) {
                state.rates[key] *= (0.9+Math.random()/5)
              }
              state.time_last_update_utc = data.time_last_update_utc
           });
        })
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
    },
    update_one(state, currency_name) {
      // This doesn't work on its own, you need to tell Vue
      //delete state.rates[currency_name]
      if(state.rates[currency_name] < 0)
        Vue.delete(state.rates, currency_name)
      else
        state.rates[currency_name] *= (-1)
    }
  },
  getters: {

  }
})

export default {
  name: 'App',
  components: {
    HelloWorld,
    CurrencyTable
  },
  store: store
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
