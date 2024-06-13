<template>
  <section>
    <div class="text-container">
      <h1>
        <span>UNIfication </span> Via Equality, Respect, and Social Empowerment!
      </h1>
      <p class="tagline">
        Join us on our mission to raise awareness over underrepresented
        groups in Hong Kong
      </p>
      <div class="scroll-interaction">
        <div class="scroll-icon">
          <div class="dot"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </div>

    <div class="image-container">
      <img draggable="false" class="image" src="~/assets/images/old_logo.png" />
    </div>
    <img class="blob" src="~/assets/images/hero/blob.svg" />
  </section>
</template>
<style lang="scss" scoped>
.text-container {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    font-size: clamp(45px, 5vw, 55px);
    line-height: 1.5;
  }
  p.tagline {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
}

section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: max(2rem, 10vw);
  .image-container {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
  .image {
    width: 90%;
    height: 497px;
    // background: #ccc;
    border-radius: 50px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
  span {
    position: relative;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -45%;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-image: url("../../assets/images/hero/line.svg");
      background-repeat: no-repeat;
      background-position: center center;
      transform: translateY(-10px);
    }
  }

  .blob {
    position: absolute;
    left: -20%;
    top: 20%;
    z-index: -1;
    height: 100vh;
    max-width: 100vw;
  }
}
@media (max-width: 768px) {
  section {
    flex-direction: column;
    .blob {
      top: 0;
    }
    .image-container {
      width: 100%;
      justify-content: center;
      .image {
        width: 100%;
      }
    }
  }
}
.scroll-interaction {
  display: flex;
  gap: 1rem;
  align-items: center;
  p {
    font-size: 1.3rem;
    font-weight: 500;
  }
}
.scroll-icon {
  border: black solid 3px;
  width: 25px;
  height: 40px;
  border-radius: 10px;
  position: relative;
  .dot {
    width: 6px;
    height: 6px;
    left: 50%;
    top: 10%;
    border-radius: 5px;
    transform: translateX(-50%);
    position: absolute;
    animation: dotMove 2s ease-in-out infinite;
    background: black;
  }
}

@keyframes dotMove {
  0% {
    transform: translate(-50%, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(-50%, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
<script setup></script>
