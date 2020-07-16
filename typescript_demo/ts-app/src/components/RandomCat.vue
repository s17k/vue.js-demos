<template>
  <div>
    <h1>{{msg}}</h1>
    <img :src="url"><img/>
    <button v-on:click="handleclick">Click Me!</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class RandomCat extends Vue {
  @Prop() private msg!: string;

  public url = null;

  public handleclick() : void {
      this.updateCats()
  }

  private updateCats() : void {
      fetch('https://randomfox.ca/floof/')
      .then((response) => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          // Examine the text in the response
          response.json().then((data) => { 
             this.url = data.image;
          });
      })
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  }

  public mounted() : void { 
    this.updateCats()
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
