<template>
  <section>
    <b-carousel v-model="carousel" :pause-hover="pauseHover">
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section class="">
          <div class="">
            <img :src="'../assets/images/' + carousels.src" />
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      carousel: 0,
      animated: "slide",
      drag: false,
      autoPlay: true,
      pauseHover: false,
      pauseInfo: false,
      repeat: true,
      interval: 2000,
      iconPrev: "chevron-left",
      carousels: [
        { src: "200.png" },
        // { src: "300.png" },
        // { src: "500.png" },
        // { title: "qwe 2", color: "primary" },
        // { title: "qwe 3", color: "info" },
        // { title: "qwe 4", color: "success" },
        // { title: "qwe 5", color: "warning" },
        // { title: "qwe 6", color: "danger" }
      ]
    };
  }
};
</script>
