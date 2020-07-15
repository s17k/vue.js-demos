<template>
  <div>
    <img :src="info"><img/>
    <button v-on:click="handleclick">Click Me!</button>
  </div>
</template>

<script>
export default {
  name: 'RandomCat',
  props: {
    msg: String
  },
  data() {
    return {
      info: "Default Value"
    }
  },
  methods: {
    handleclick() {
      this.update_cats()
    },
    update_cats() {
      var self = this

      fetch('https://aws.random.cat/meow')
        .then(function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
              self.info = data.file
            });
        })
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
    }
  },
  mounted () {
    this.update_cats()
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
