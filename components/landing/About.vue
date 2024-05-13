<template>
  <section id="about">
    <div class="about-box">
      <p class="small-text">About Uni-verse</p>
      <h2>Who we are</h2>
      <p>
        Uni-verse is a cross-secondary school student society founded in Januray
        2024 by a passionate group of students. While Hong Kong is one of the
        most prosperous and cosmopolitan cities in the world, it is also one
        that lacks inclusitivity, acceptance and diversity. This is exactly the
        field in which Uni-verse strives to make an impact. By hosting an array
        of events, we hope to raise awareness over ethnic, gender and disabled
        minorities. Join us on our journey to transform Hong Kong into a
        more diverse city.
      </p>
    </div>
    <img class="image" src="~/assets/images/logo.png" />
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
    line-height: 1.5;

    width: 90%;
  }
}
.image {
  background: #ececec;
  flex: 1;
  height: 45vh;
  border-radius: 50px;
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
