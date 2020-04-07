<template>
  <div class="main-container">
      <Blocks :focusBlocks="focusBlocks" />
      <div class="center-container">
        <div class="circle">
          
          <timer class="timer"
            :timer="formattedTime"
            :pomoStates="pomoStates"
            :timerState="timerState"
            v-on:start="start"
          />
          <div class="border-timer" v-if=" timerState == 'running' "></div>
        </div>
        <p class="cool-phrase">
          {{ pomoStates[this.$store.getters.currentState].phrase }}
        </p>
      </div>
      <!--
      <div class="right-column-container">
        <div class="menu-button">...</div>
        <div class="ad"></div>
      </div> -->
    </div>
</template>

<!--           SCRIPT           -->

<script>
import Timer from '@/components/Timer';
import Blocks from '@/components/Blocks';
import notifications from '@/utils/notifications';

export default {
  components: {
    Timer,
    Blocks
  },
  data() {
    return{
      focusBlocks: 0,
      timerState: "stopped",
      formattedTime: "00:00",
      timer: undefined,
      currentPomoState: 'focus',
      pomoStates: {
        focus: {
          text: 'focus',
          time: (25 * 60),
          phrase: "You shall not procrastinate!"
        },
        shortBreak: {
          text: 'short break',
          time: (5 * 60),
          phrase: "Get up and stretch a little bit!"
        },
        longBreak: {
          text: 'long break',
          time: (20 * 60),
          phrase: "You have done a good job! Time to rest."
        }
      },
      currentTimer: 4,
    }
    
  },
  methods: {
    init () {
      this.currentTimer = this.pomoStates.focus.time;
      this.formattedTime = this.formatTime(this.currentTimer);
      notifications.askPermission();
    },
    start () {
      if(this.timerState === "stopped"){
        if(this.focusBlocks == 4){
          this.focusBlocks = 0;
        }
        this.timerState = "running";
        this.tick();
      }
    },

    tick () {
      this.timer = setInterval(() => {
        this.currentTimer--;
        if(this.currentTimer == -1){

          if(this.$store.getters.currentState == 'focus'){
            this.focusBlocks++;
          }
          this.$store.commit('nextState');
          notifications[this.$store.getters.currentState]();
          this.currentTimer = this.pomoStates[this.$store.getters.currentState].time;
          if(this.$store.state.currentPomoState == 0){
            this.timerState = "stopped";
            clearInterval(this.timer);
          }
          
        }
        this.formattedTime = this.formatTime(this.currentTimer);
      }, 1000);
    },
    formatTime (seconds) {
      let minute = Math.floor(seconds/60);
      let second = seconds - (minute * 60);
      return second < 10 ? minute+":0"+second : minute+":"+second ;
      
    }
  },
  beforeMount() {
    this.init();
  }
 
}
</script>


<!--           STYLES           -->

<style scoped>
  .main-container {
    height: 100vh;
    background-color: #282A36;
  }

  .center-container{
    height: 100vh;
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .center-container .circle {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    border: 10px solid #44475A;
    background-color: #44475A;
    position: relative;
    /* flex-direction: column;
    align-items: center;
    justify-content: center;*/ 
  }

  .center-container .circle .border-timer {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    border: 10px solid var(--primary-color);
    border-left: 0px;
    border-top: 0px;
    border-bottom: 0px;
    position: absolute;
    margin: 0 auto;
    top: -10px; left: -10px;
    animation: right 5s linear infinite;
  }

  @keyframes right {
    0% {
    transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  

  .center-container .cool-phrase {
    font-size: 24px;
    margin-top: 70px;
  }

  @media (min-width: 531px) and (max-width: 750px) {
    
    .center-container {
      float: right;
      margin-right: 5vw;
    }
  }
  @media (min-width:100px) and (max-width: 530px) {
    .center-container .circle {
      margin-top: 100px;
    }
  }
</style>