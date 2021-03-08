<template>
  <Modal v-if="showModal">
    <template v-slot:body>
      <textarea rows="4" v-model="nameEdit"></textarea>
      <button @click.prevent="clickOK">ok</button>
    </template>
  </Modal>
  <li class="score-item">
    <div class="name" @click.prevent="showModal = true">{{ name }}</div>
    <div
      class="weui-progress"
      @click.prevent="$emit('clickBar', idx, 1)"
      @click.right.prevent="$emit('clickBar', idx, -1)"
    >
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
import { ref } from "vue";
import Modal from "./Modal.vue";

export default {
  name: "Bar",
  emits: ["clickBar", "editName"],
  components: { Modal },
  props: {
    name: String,
    idx: Number,
    percent: Number,
    score: Number,
  },
  setup(props, { emit }) {
    const showModal = ref(false);
    const nameEdit = ref(props.name);
    const clickOK = () => {
      showModal.value = false;
      emit("editName", props.idx, nameEdit.value);
    };
    return { showModal, clickOK, nameEdit };
  },
};
</script>

<style scoped>
.name {
  margin-bottom: 1rem;
  line-height: normal;
  word-break: keep-all;
}
.score-number {
  width: 4rem;
  font-size: xx-large;
  font-weight: 900;
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
  height: 2rem;
  -webkit-box-flex: 1;
  flex: 1;
}
.weui-progress__inner-bar {
  width: 0;
  height: 100%;
  background-color: #07c160;
  transition: 1s all linear;
}

textarea {
  width: 100%;
  height: auto;
}
</style>
