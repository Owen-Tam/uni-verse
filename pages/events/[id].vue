<template>
  <section class="summary-text">
    <h2>{{ name }}</h2>
    <h4>{{ date }}</h4>
    <p>{{ summaryText }}</p>
  </section>
  <section class="summary-images">
    <div class="image-grid">
      <img
        v-for="(img, i) in imgList"
        :id="`img${i + 1}`"
        :style="{
          background: `url(${getImgUrl(img, true)}) 0% 0% / cover no-repeat`,
          backdropFilter: 'blur(20px)',
        }"
        loading="lazy"
        :src="getImgUrl(img)"
        draggable="false"
        class="gd-img"
        alt="#"
      />
    </div>
  </section>
</template>
<style scoped>
.image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 30vh 30vh 30vh;
  gap: 2vw;
  background-size: cover;
  object-fit: cover;
}
#img1 {
  grid-column: 1 / span 3;
  grid-row: 1 / span 1;
}
#img2 {
  grid-column: 3 / span 2;
  grid-row: 3 / span 1;
}
#img3 {
  grid-column: 1 / span 3;
  grid-row: 2 / span 1;
}
#img4 {
  grid-column: 1 / span 2;
  grid-row: 3 / span 1;
}
#img5 {
  grid-column: 4 / span 3;
  grid-row: 1 / span 2;
}
#img6 {
  grid-column: 5 / span 2;
  grid-row: 3 / span 1;
}
.gd-img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
}
.summary-text {
  padding-top: 5vh;
}
.summary-text h2 {
  font-size: clamp(2.5rem, 4vw, 4rem);
}
.summary-text h4 {
  font-size: 1.5rem;
  margin-top: 0.8rem;
  font-weight: 600;
}
.summary-text p {
  line-height: 1.5;
  margin-top: 1.2rem;
  font-size: 1.1rem;
}
.summary-images {
  padding-top: 0;
}
@media (max-width: 1200px) {
  .image-grid {
    grid-template-rows: repeat(4, 1fr);
  }
  #img1 {
    grid-column: 1 / span 6;
    grid-row: 1 / span 1;
  }
  #img2 {
    grid-column: 1 / span 6;
    grid-row: 4 / span 1;
  }
  #img3 {
    grid-column: 1 / span 3;
    grid-row: 2 / span 1;
  }
  #img4 {
    grid-column: 1 / span 4;
    grid-row: 3 / span 1;
  }
  #img5 {
    grid-column: 4 / span 3;
    grid-row: 2 / span 1;
  }
  #img6 {
    grid-column: 5 / span 2;
    grid-row: 3 / span 1;
  }
}
</style>
<script setup>
import events from "~/data/events.json";
const route = useRoute();

const id = route.params.id;
const event = events.find((event) => event.id === id && event.finished);
if (!event) {
  throw createError({
    statusCode: 404,
    statusMessage: `Event not found`,
    fatal: true,
  });
}
const {
  name,
  summary: { summaryText, date },
} = event;
const getImgUrl = function (path, small = false) {
  if (small) path = convertToSmallWebP(path);
  return `/events/${event.id}/${path}`;
};
const convertToSmallWebP = function (path) {
  const extension = ".webp";

  if (path.endsWith(extension)) {
    const filename = path.slice(0, -extension.length); // Remove the extension
    const newFilename = filename + "-small" + extension; // Append "-small" before the extension
    return newFilename;
  }

  // If the path doesn't end with ".webp", return the original path
  return path;
};
const imgList = [
  "image1.webp",
  "image2.webp",
  "image3.webp",
  "image4.webp",
  "image5.webp",
  "image6.webp",
];
</script>
