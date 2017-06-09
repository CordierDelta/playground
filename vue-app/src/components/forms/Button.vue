<template lang="jade">
  button(
    @click="$emit('click')"
  ) {{ buttonText }}
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: 'Click',
    }
  }
}
</script>
