<template>
  <div class="question-cloud">
    <div
      class="question-number"
      v-for="question in questionList"
      :class="selected === question.order ? 'active' : ''"
      :key="question.id"
      @click="handleClick(question.order)"
    >
      {{ question.order }}
    </div>
  </div>
</template>

<script>

export default {
  props: ['order', 'questionList'],
  emits: ["updateOrder"],
  data() {
    return {
      selected: 1,
    }
  },
  watch: {
    order: {
      immediate: true,
      handler(val, oldVal) {
        this.selected = val;
      }
    }
  },
  methods: {
    handleClick(order) {
      this.selected = order;
      this.$emit('updateOrder', order);
    }
  }
}
</script>

<style>
.question-cloud {
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin: 50px auto;
  box-sizing: border-box;
  flex-wrap: wrap;
}
.question-number {
  text-decoration: none;
  color: #212121;
  padding: 10px 20px;
  background: #CAD5E2;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.question-number:hover {
  background: #35BDD0;
  color: white;
}
.question-number.active {
  background: #35BDD0;
  color: white;
}
</style>