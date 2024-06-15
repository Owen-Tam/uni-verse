<template>
  <div class="event-container">
    <div class="event-text">
      <h3 class="event-name">{{ name }}</h3>
      <p class="event-description">{{ description }}</p>
      <div class="btn-container">
        <btn-primary class="join_button" :href="regLink">Sign up</btn-primary>
        <btn-primary class="info_button" isWhite :href="infoLink"
          >Learn More</btn-primary
        >
      </div>
    </div>
    <ul class="event-details">
      <h4>Event Details</h4>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  </div>
</template>
<style scoped>
.event-container {
  display: flex;
  gap: 5vw;
  background: #fff3d2;
  padding: clamp(3rem, 6vw, 5rem);
}
.event-text {
  flex: 2;
}
.event-details {
  flex: 1;
}
.join_button,
.info_button {
  font-size: clamp(1rem, 2vw, 1.2rem);
}
h4 {
  font-size: 1.5rem;
}
h3 {
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin-bottom: 0.5rem;
}
p {
  margin-bottom: 1.3rem;
  font-size: 1rem;
}
.btn-container {
  display: flex;
  gap: 1rem;
}
@media (max-width: 1200px) {
  .event-container {
    flex-direction: column;
  }
}
</style>
<script setup>
const props = defineProps([
  "name",
  "description",
  "regLink",
  "infoLink",
  "details",
]);
const { name, description, regLink, infoLink, details } = toRefs(props);
</script>
