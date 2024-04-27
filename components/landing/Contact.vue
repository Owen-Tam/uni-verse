<template>
  <section id="contact">
    <div class="container contact">
      <h3>Contact Us</h3>
      <p>
        Right now, you can only contact us through email or instagram, but we’ll
        let you know if there are any updates!
      </p>
      <div class="icon-container">
        <a target="_blank" href="#"
          ><img src="~/assets/images/hero/mail_icon.svg"
        /></a>
        <a target="_blank" href="https://www.instagram.com/uni.versehk/"
          ><img src="~/assets/images/hero/instagram_icon.svg"
        /></a>
      </div>
    </div>
    <div class="line"></div>
    <div class="container join">
      <h3>Join Uni-verse</h3>
      <p>We are current accepting applications to join our team!</p>
      <btn-primary
        href="https://docs.google.com/forms/d/e/1FAIpQLScvqBfYVOWHt3YdhDlBJnONDd-7TiJHZ_U09Na2FLyboFUc0A/viewform?usp=sf_link"
        isWhite
        >Join Us</btn-primary
      >
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  background: var(--primary-color);
  color: white;
  display: flex;
  gap: 3vw;
  justify-content: center;
  align-items: flex-start;
  .line {
    width: 8px;
    height: 200px;
    background: white;
  }
  h3 {
    font-weight: 600;
    font-size: clamp(2.4rem, 5vw, 2.8rem);
  }
  p {
    line-height: 1.5;
  }
  .container {
    flex: 1;
    p {
      font-size: clamp(1.1rem, 1vw, 1.2rem);
    }
  }
  .contact.container {
    .icon-container {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    img {
      width: 40px;
      height: 40px;
      transition: transform 300ms ease-in-out;
      cursor: pointer;
    }
  }
  .join.container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    p {
      margin-bottom: 1rem;
    }
  }
  .icon-container img:hover {
    transform: translateY(-5px);
  }
}
@media (max-width: 768px) {
  section {
    flex-direction: column;
    gap: 5vh;
    .line {
      height: 8px;
      width: 100%;
    }
  }
}
</style>
<script setup></script>
