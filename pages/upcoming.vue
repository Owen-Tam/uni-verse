<template>
  <pageHero>Upcoming Events</pageHero>
  <section class="upcoming-events-container">
    <upcoming-event
      v-for="event in events"
      :name="event.name"
      :description="event.description"
      :regLink="event.regLink"
      :infoLink="event.infoLink"
      :details="event.details"
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
const events = [
  {
    name: "Voices Unveiled: Empowering Ethnic Minorities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    regLink: "https://forms.gle/AAG8a96L6VyomckG9",
    infoLink:
      "https://drive.google.com/file/d/10IHwM0Wu7BHRjacj-wWTSY3Cpk1FTxON/view?usp=sharing",
    details: [
      "Date: 23 June 2024",
      "Time: 3-5 p.m.",
      "Quota: 20 participants",
      "Location: Room 1208, 12F, Houtex Industrial Building, 16 Hung To Rd, Ngau Tau Kok, Hong Kong",
    ],
  },
];
</script>
