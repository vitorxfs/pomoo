<template>
  <div class="timer-container">
    <p class="state" >
      {{ pomoStates[this.$store.getters.currentState].text }}
    </p>
    <span class="timer">{{ timer }}</span>
    <button class="start-timer"
      v-on:click="$emit('start')"
      v-if=" timerState != 'running' "
    >Start</button>
    <!-- <button 
      v-on:click="$emit('start')"
      v-if=" timerState != 'running' "
    >Start</button> -->
  </div>
</template>

<script>
export default {
  name: 'Timer',
  props: [
    'timer',
    'pomoStates',
    'timerState',
  ]
}
</script>

<style scoped>
  .timer {
    z-index: 3;
    font-size: 100px;
  }

  .timer-container {
    width: 300px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin: auto;
    position: absolute;
    top:60px;
    left: 0; right: 0;
  }

  .timer-container .state{

    text-align: center;
    margin: 0 auto;
    left: 0; right: 0;
    top: 110px;
  }

  .timer-container .start-timer {
    width: 100px;
    position: absolute;
    border-radius: 5px;
    margin: 0 auto;
    left: 0; right: 0;
    bottom: -80px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-weight: 600;
  }

  .timer-container .timer, .timer-container .start-timer {
    z-index: 3
  }

  .timer-container .state {
    font-size: 24px;
  }
</style>