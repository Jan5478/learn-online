<template>
  <div class="play-container">
    <p class="title"> {{ msg }} </p>
    <div class="center">
      <iframe  src="http://player.youku.com/embed/XMzcwNTY3NTM2MA" frameborder=0 allowfullscreen></iframe>
    </div>
    <p class="bigtitle"> {{ text }} </p>
  </div>
</template>

<script>
  export default {
    name: "play",
    data() {
      return {
        msg: "这是标题",
        text: "这是详细大标题",
      };
    },
  }
</script>

<style lang="scss" scoped>
  .play-container {
    background-color: #f6f6f6;
    p {
      padding: 20px;
      text-align: center;
    }
    .center {
      text-align: center;
      iframe {
        width: 720px;
        height: 400px;
      }
    }
  }
</style>
