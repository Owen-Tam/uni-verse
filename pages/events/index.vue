<template>
  <pageHero>Events</pageHero>
  <section class="upcoming-events-container">
    <upcoming-event
      v-for="event in events"
      :name="event.name"
      :description="event.description"
      :regLink="event.regLink"
      :infoLink="event.infoLink"
      :details="event.details"
      :finished="event.finished"
      :id="event.id"
    ></upcoming-event>
  </section>
</template>
<style scoped>
@media (max-width: 576px) {
  .upcoming-events-container {
    padding: 0;
  }
}
</style>
<script setup>
import events from "~/data/events.json";
</script>
