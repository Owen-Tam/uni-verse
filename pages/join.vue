<template>
  <pageHero> Get Involved </pageHero>
  <section class="intro-container">
    <p>
      At Uni-verse, we welcome all secondary and university students. As long as
      you are passionate about turning the world into a more inclusive place for
      minority groups, the door will always be open. Get involved by either
      becoming a member or joining our executive committee. Even though we are
      based in Hong Kong, students from foreign countries could also contribute
      by becoming global ambassadors. Read on!
    </p>
  </section>
  <section class="area-container">
    <h3>Local</h3>
    <div class="container">
      <div class="text">
        <h5>1. Become a member</h5>
        <p>
          As a member, you get to choose which team you would like to join. At
          Uni-verse, we have four teams, namely events, finance and management,
          design and media. By being a member, you receive abundant
          opportunities to volunteer/help out at our events. You will also gain
          profound exposure to the global issues faced by minority groups.
        </p>
        <btnPrimary href="https://forms.gle/Y7RnwashUBejNptB8"
          >Sign up</btnPrimary
        >
      </div>
      <img src="/events/voicesunveiled/image1.webp" />
    </div>
    <div class="container">
      <div class="text">
        <h5>2. Join our local executive committee</h5>
        <p>
          If you want more of a challenge, you may also join our executive
          board. By becoming a member of our board, you get to take turns
          negotiating partnerships with NGOs in Hong Kong and even host events.
          Moreover, you get the opportunity to lead the four teams of our
          community. It is the perfect chance for one to nurture their
          leadership and collaborative skills!
        </p>
        <btnPrimary href="https://forms.gle/dfETkBbDFeTMTkCg8"
          >Sign up</btnPrimary
        >
      </div>
      <img src="~/assets/images/join/exco.webp" />
    </div>
  </section>
  <section class="area-container">
    <h3>International</h3>
    <div class="container">
      <div class="text">
        <h5>Become a global ambassador</h5>
        <p>
          You might be wondering, how can I contribute if I am not from Hong
          Kong? Do not worry, Uni-verse is exploring the possibility of going
          global. Help us uphold our values worldwide by becoming a global
          ambassador! Being a global ambassador, you get the opportunity to
          organise events which align with our mission in your own country!
          Depending on the role you are assigned, you may get the chance to set
          up your own team, having full control over the direction you take.
          There will be frequent communication between our global ambassadors
          and the local team, in case any advice is needed. People from all
          countries are welcome!
        </p>
        <btnPrimary href="https://forms.gle/aDYK9x4NQtf81ddR8"
          >Sign up</btnPrimary
        >
      </div>
      <img src="~/assets/images/join/international.webp" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
section.intro-container {
  padding-bottom: 0;
  p {
    font-size: 1.1rem;
  }
}
.area-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
h3 {
  font-size: 2rem;
}
.container {
  display: flex;
  align-items: center;
  gap: 8vw;
  img {
    flex: 1;
    width: 50px;
    height: 370px;
    object-fit: cover;
    border-radius: 50px;
  }
  .text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    align-items: start;
    p {
      margin-bottom: 0.4rem;
      font-size: 1.1rem;
    }
    h5 {
      font-size: 1.6rem;
    }
  }
}
</style>
