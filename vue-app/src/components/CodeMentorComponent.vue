<template lang="jade">
.code-mentor-component
  h1 Hello Codementor People
  p(v-bind:style=`{color: levelColor}`) The conter Value is: {{ counter }}
  FormButton(@click="onClick({ action: 'sum'})" v-bind:buttonText="sumButtonText")
  FormButton(@click="onClick({ action: 'rest'})" buttonText="rest")
  p(v-if="counter <= 3") HEY ALL OK
  p(v-else-if="counter > 3 && counter <= 8") HEY HEY HEY! EASY
  p(v-else) AAAAAAAA
  .exclamations
    h1(v-for="num in counter") !
</template>

<script>
import FormButton from './forms/Button';

const COLORS_BY_LEVEL = {
  normal: 'blue',
  danger: 'red',
  warning: 'green',
};

export default {
  components: { FormButton },
  computed: {
    levelColor() {
      const { counter } = this;
      let level = 'normal';
      if (counter > 3 && counter <= 8) level = 'warning';
      else if (counter >= 9) level = 'danger';
      return COLORS_BY_LEVEL[level];
    }
  },
  methods: {
    onClick({ action }) {
      this.counter = action === 'sum' ? this.counter + 1 : this.counter - 1;
    }
  },
  data() {
    return {
      counter: 0,
      sumButtonText: 'sum',
    }
  }
}
</script>

<style lang="stylus">
.exclamations
  display: flex
</style>
