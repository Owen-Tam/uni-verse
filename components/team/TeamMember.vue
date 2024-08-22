<template>
  <div class="team-member">
    <img draggable="false" :src="getImrUrl(imageLink)" />
    <h4>{{ name }}</h4>
    <div class="titles">
      <p v-for="title in titles">{{ title }}</p>
    </div>
  </div>
</template>
<style scoped>
.team-member {
  text-align: center;
  width: 14.8rem;
}
img {
  border-radius: 100%;
  width: 180px;
  height: 180px;
  object-fit: cover;
  user-select: none;
}
h4 {
  font-size: 1.4rem;
  margin-top: 0.5rem;
}
</style>
<script setup>
const props = defineProps({
  name: { type: String, required: true },
  titles: { type: Array, required: true },
  imageLink: { type: String, required: true },
});
const getImrUrl = function (link) {
  return `/team/${link}.webp`;
};
</script>
