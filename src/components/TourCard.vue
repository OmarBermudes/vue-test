<template>
  <div class="tour-card">
    <Slider :images="item.images" />
    <div class="card-info">
      <h1 class="card-title">{{ item.title }}</h1>
      <label class="card-description">
        Precio Desde: ${{ item.buyItFrom }}
      </label>
      <label class="card-description">
        Ubicación: {{ item.location }}
        <b-icon icon="map-marker-outline" size="is-small"></b-icon>
      </label>
      <label class="card-description">
        Duración: {{ item.duration }}
        <b-icon icon="clock-outline" size="is-small"></b-icon>
      </label>
      <div class="catd-btns">
        <b-button type="is-success" expanded>
          Ver Más!
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
export default {
  name: "TourCard",
  components: {
    Slider
  },
  props: {
    item: Object
  },
  created() {
    // console.log(this.item.images);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tour-card {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  border: 1px solid red;
  margin: 10px;
  padding: 10px;
  width: 80%;
}

.card-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid hotpink;
  padding: 10px;
  max-width: 80%;
}

.card-title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.card-description {
  font-size: 16px;
  text-align: left;
}
</style>
