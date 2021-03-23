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
import { ref, toRaw, unref } from "vue";
import Bar from "./Bar.vue";
import { useElectron } from "/@/use/electron";
const { getScore, setScore } = useElectron();

const scores = ref([]);
getScore().then((s) => (scores.value = s));

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
  setScore({ scores: toRaw(unref(scores)) });
};

const editName = (idx, name) => {
  scores.value[idx].name = name;
  setScore({ scores: toRaw(unref(scores)) });
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.score-list {
  margin: 0 2rem;
}
</style>
