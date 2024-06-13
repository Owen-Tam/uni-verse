<template>
  <nav :class="checked ? 'opened' : ''">
    <div class="logo">
      <NuxtLink to="/">
        <!-- <a href="/">Uni-verse</a> -->
        <img draggable="false" src="~/assets/images/logo.png" />
      </NuxtLink>
    </div>
    <ul>
      <li><NuxtLink href="/upcoming">Upcoming</NuxtLink></li>

      <li><NuxtLink href="/#about">About</NuxtLink></li>
      <li><NuxtLink href="/#contact">Contact</NuxtLink></li>
      <li>
        <btn-primary class="join-btn" href="https://forms.gle/i2tcT7StVbksxcvt8"
          >Join us</btn-primary
        >
      </li>
    </ul>
    <div class="nav_icon" @click="toggle">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </nav>
</template>
<script setup>
const checked = ref(false);

const toggle = function () {
  checked.value = !checked.value;
};
</script>
<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 2rem 7vw 2rem 7vw;
}
a {
  text-decoration: none;
  color: black;
  scroll-behavior: smooth;
}
.logo {
  display: flex;
  align-items: center;
  img {
    height: 5dvh;
  }
  a {
    font-weight: 500;
    font-size: 1.4rem;
  }
}
ul {
  list-style: none;
  display: flex;
  gap: clamp(1rem, 2vw, 1.8rem);
  align-items: center;

  li {
    font-size: 1.2rem;
    position: relative;
    font-weight: 500;
    .join-btn {
      color: white;
    }
  }
  li:not(:has(.join-btn)) a::after {
    content: "";
    width: 0;
    height: 3px;
    display: block;
    background: black;
    transition: width 300ms ease-in-out;
    position: absolute;
    bottom: -2%;
  }
  li:not(:has(.join-btn)):hover a::after {
    width: 100%;
  }
}
.nav_icon {
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  display: none;
  position: relative;
  z-index: 2;
  .line {
    height: 2px;
    width: 2rem;
    background: #333;
    transition: all 300ms ease-in-out;
  }
}

@media (max-width: 768px) {
  nav {
    position: relative;
    ul {
      flex-direction: column;
      position: fixed;
      z-index: 2;
      background: white;
      width: 100%;
      height: 100dvh;
      padding-block: 1rem;
      left: 0;
      top: -100vh;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      transition: top 300ms ease-in-out;
    }

    .nav_icon {
      display: flex;
    }
  }
  nav.opened {
    ul {
      top: 0;
    }
  }
}
</style>
