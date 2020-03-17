<template>
  <div class="slider-container">
    <b-carousel :autoplay="true" :indicator="false" :overlay="gallery">
      <b-carousel-item v-for="(item, i) in images" :key="i">
        <figure @click="switchGallery(true)" class="image">
          <img
            :src="require('../assets/images/' + item.image)"
            v-bind:alt="item.image"
          />
        </figure>
      </b-carousel-item>
      <span
        v-if="gallery"
        @click="switchGallery(false)"
        class="modal-close is-large"
      />
      <template slot="overlay">
        <div class="has-text-centered has-text-white">
          Hello i'am overlay!
        </div>
      </template>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    images: Array
  },
  data() {
    return {
      gallery: false
    };
  },
  methods: {
    switchGallery(value) {
      this.gallery = value;
      if (value) {
        return document.documentElement.classList.add("is-clipped");
      } else {
        return document.documentElement.classList.remove("is-clipped");
      }
    }
  },
  created() {
    console.log("asd");
    console.log(this.images);
  }
};
</script>

<style>
.slider-container {
  display: flex;
  border: 1px solid blue;
  margin-right: 10px;
  width: 200px;
  height: 200px;
}
</style>
