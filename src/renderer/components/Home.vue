<template>
  <ul class="score-list">
    <Bar
      v-for="(score, idx) in scores"
      @clickBar="clickBar"
      @editName="editName"
      :idx="idx"
      :name="score.name"
      :percent="score.percent"
      :score="score.score"
    />
  </ul>
</template>

<script setup>
import { ref } from "vue";
import Bar from "./Bar.vue";

const scores = ref([
  {
    name: "黄柄淇、高明泽、王锦程、孔森羽",
    score: 10,
    percent: 100,
  },
  {
    name: "孔荣欣、薛皓太、王一博、齐林、王浩翔、潘昱龙、王子康",
    score: 10,
    percent: 100,
  },
  { name: "邵熙杰、张宝聚、高小珺、王思彤", score: 10, percent: 100 },
]);

const clickBar = (idx, diff) => {
  scores.value[idx].score += diff;
  let smallest, largest;
  for (const [idx, score] of scores.value.entries()) {
    if (typeof smallest === "undefined") {
      smallest = { idx, score: score.score };
    }
    if (typeof largest === "undefined") {
      largest = { idx, score: score.score };
    }
    if (score.score < smallest.score) {
      smallest = { idx, score: score.score };
    }
    if (score.score > largest.score) {
      largest = { idx, score: score.score };
    }
  }
  const diffMax = largest.score - smallest.score;
  for (const [idx, score] of scores.value.entries()) {
    scores.value[idx].percent = parseInt(
      ((score.score ** 2 / largest.score ** 2) * 100).toFixed()
    );
  }
};

const editName = (idx, name) => {
  scores.value[idx].name = name;
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.score-list {
  margin: 0 2rem;
}
</style>
