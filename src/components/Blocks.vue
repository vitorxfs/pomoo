<template>
  <div class="blocks-container">
    <div 
      class="block" 
      v-for="i in [4, 3, 2, 1]" :key="i"
      v-bind:class="[focusBlocks >= i ? 'greenbg' : 'darkbg']"
    > 
      <div class="check" v-if="focusBlocks >= i"></div> 
    </div>
    <!-- <div class="block"> <div class="check" v-if="focusBlocks >= 4"></div> </div>
    <div class="block"> <div class="check" v-if="focusBlocks >= 3"></div> </div>
    <div class="block"> <div class="check" v-if="focusBlocks >= 2"></div> </div>
    <div class="block"> <div class="check" v-if="focusBlocks >= 1"></div> </div> -->
  </div>
</template>

<script>
export default {
  name: 'Blocks',
  props: [
    'focusBlocks'
  ]
}
</script>

<style scoped>
  .blocks-container {
    display: grid;
    height: 100%;
    width: 25vh;
    grid-template-columns: 100%;
    grid-template-rows: 25% 25% 25% 25%;
    position: absolute;
  }
  .blocks-container .block {
    background-color: #1F2128;
    width: 100%;
    position: relative;
  }
  .blocks-container .greenbg {
    border: 1px solid #50fa7b;
  }
  .blocks-container .darkbg {
    border: 1px solid #282A36;
  }
  .blocks-container .block .check {
    position: absolute;
    width: 50px;
    height: 25px;
    transform: rotate(-45deg);
    border-bottom: 5px solid #50fa7b;
    border-left: 5px solid #50fa7b;
    margin: auto;
    top: 0; bottom: 0;
    left: 0; right: 0;
  }

  @media (min-width:100px) and (max-width: 530px) {
    .blocks-container {
      height: 25vw;
      width: 100%;
      grid-template-rows: 100%;
      grid-template-columns: 25% 25% 25% 25%;
    }
  }
</style>