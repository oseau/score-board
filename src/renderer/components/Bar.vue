<template>
  <li class="score-item">
    <div class="weui-progress">
      <div class="weui-progress__bar">
        <div
          class="weui-progress__inner-bar js_progress"
          :style="`width: ${percent}%`"
        ></div>
      </div>
      <span class="score-number">{{ score }}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: "Bar",
  props: {
    percent: Number,
    score: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.score-number {
  width: 4rem;
}
.score-item {
  margin: 5rem 0;
}
.weui-progress {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.weui-progress__bar {
  background-color: #ededed;
  height: 1rem;
  -webkit-box-flex: 1;
  flex: 1;
}

.weui-progress__inner-bar {
  width: 0;
  height: 100%;
  background-color: #07c160;
}
</style>
