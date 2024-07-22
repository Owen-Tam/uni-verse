<template>
  <a
    :target="isTargetBlank ? '_blank' : '_self'"
    :class="isWhite ? 'btn_white' : 'btn_blue'"
  >
    <slot></slot>
  </a>
</template>
<script setup>
const props = defineProps({
  isWhite: { type: Boolean, default: false },
  isTargetBlank: { type: Boolean, default: true },
});
</script>
<style lang="scss" scoped>
a {
  border: none;
  color: white;
  font-weight: 400;
  font-size: 1.2rem;
  padding: 0.4rem 1.5rem;
  border-radius: 15px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 100ms linear;
}
a.btn_blue:hover {
  background: var(--primary-color--darker);
}
a.btn_white:hover {
  background: hsl(0, 0%, 90%);
}
.btn_blue {
  background-color: var(--primary-color);
}
.btn_white {
  background-color: white;
  color: var(--primary-color);
}
</style>
