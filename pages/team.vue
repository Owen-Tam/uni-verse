<template>
  <pageHero>Our Team</pageHero>
  <section id="team-section">
    <div class="team">
      <h2>Leadership team</h2>
      <div class="members-container">
        <TeamMember
          v-for="member in leadership"
          :id="member.name"
          :name="member.name"
          :titles="member.titles"
          :imageLink="member.imageLink"
        ></TeamMember>
      </div>
    </div>
    <div class="team">
      <h2>Honourary advisors</h2>
      <div class="members-container">
        <TeamMember
          v-for="member in advisors"
          :id="member.name"
          :name="member.name"
          :titles="member.titles"
          :imageLink="member.imageLink"
        ></TeamMember>
      </div>
    </div>
  </section>
</template>
<script setup>
import { leadership, advisors } from "~/data/team.json";
</script>
<style scoped>
#team-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.members-container {
  margin-top: 1rem;
  display: flex;
  gap: clamp(1rem, 4vw, 2.5rem);
  flex-wrap: wrap;
}
h2 {
  font-size: 2rem;
}
</style>
