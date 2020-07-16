import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rates : {"USD":1.0}
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
              const rates = state.rates as Record<string, number>
              console.log('type = ' + typeof(state.rates))
              for(const key in rates) {
                rates[key] *= (0.9+Math.random()/5)
              } 
           });
        })
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
    },
    updateOne(state, currencyName: string) {
      // This doesn't work on its own, you need to tell Vue
      //delete state.rates[currency_name]
      const rates = state.rates as Record<string, number>
      if(rates[currencyName] < 0)
        Vue.delete(state.rates, currencyName)
      else
        rates[currencyName] *= (-1)
    }
  }
});

