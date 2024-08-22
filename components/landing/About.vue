<template>
  <section id="about">
    <div class="about-box">
      <p class="small-text">About Uni-verse</p>
      <h2>Who we are</h2>
      <p>
        Uni-verse is a global student-led community launched by a passionate
        group of students from Hong Kong. While there exists many cosmopolitan
        and prosperous cities, we live in a world that lacks inclusivity,
        acceptance and diversity. This is exactly the field in which Uni-verse
        strives to make an impact. By hosting an array of events, we hope to
        raise awareness over ethnic, gender and disabled minority groups. Join
        us on our journey to transform the world into a more
        inclusive place for all!
      </p>
      <btnPrimary isNuxtLink class="team-btn" href="/team">Our Team</btnPrimary>
    </div>
    <img draggable="false" class="image" src="~/assets/images/about.webp" />
  </section>
</template>
<style lang="scss" scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-box {
  background: #fff3d2;
  padding: 8vh 8vw 15vh 8vw;
  width: 65%;

  .small-text {
    text-transform: uppercase;
    color: #5c5c5c;
    font-size: 20px;
    font-weight: 500;
  }
  h2 {
    font-size: 40px;
    margin-top: 0.5rem;
  }
  p {
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 1.1rem;
    line-height: 1.5;

    width: 90%;
  }
}
.image {
  background: #ececec;
  flex: 1;
  width: 50px;
  height: 500px;
  border-radius: 50px;
  object-fit: cover;
  transform: translateX(-50px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1200px) {
  section {
    flex-direction: column;
  }
  .about-box {
    width: 100%;
    padding-inline: 6vw;
  }
  .image {
    width: 100%;
    flex: auto;
    transform: none;
    border-radius: 0;
  }
}
@media (max-width: 576px) {
  section {
    padding-inline: 0;
  }
  .image {
    box-shadow: none;
  }
}
</style>
<script setup></script>
