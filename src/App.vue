<template>
  <div id="app" :style="cssVars">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  data() {
    return{
      pomoStateColors: {
        focus: "#ff79c6",
        shortBreak: "#8be9fd",
        longBreak: "#f1fa8c"//"#bd93f9"
      },
    }
    
  },
  computed: {
    cssVars() {
      //let state = this.$store.commit('getCurrentState');
      return {
        '--primary-color': this.pomoStateColors[this.$store.getters.currentState],
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap');

/* :root {
  --primary-color: {{ pomoStateColors.focus }};
} */

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
}

button {
  padding: 10px;
  background-color: var(--primary-color);
  border: none;
  font-size: 20px;
  color: white;
}
</style>
