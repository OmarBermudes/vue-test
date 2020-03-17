<template>
  <div id="home" class="home">
    <SearchBar />
    <div id="tourCards" class="tour-cards">
      <TourCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TourCard from "@/components/TourCard.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Home",
  data() {
    return {
      items: []
    };
  },
  components: {
    TourCard,
    SearchBar
  },
  mounted() {
    // simulating axios.get()
    this.items = [
      {
        id: 1,
        title: "Tour Xcaret Plus Todo Incluido",
        buyItFrom: 100,
        location: "Cancun, Q.Roo",
        duration: "7 hrs",
        images: [
          {
            title: "Slide 1",
            image: "200.png"
          },
          {
            title: "Slide 2",
            image: "300.png"
          },
          {
            title: "Slide 3",
            image: "500.png"
          }
        ]
      },
      {
        id: 2,
        title: "Tour Zona de Antros Cancún",
        buyItFrom: 25,
        location: "Playa del Carmen, Q.Roo",
        duration: "45 min",
        images: [
          {
            title: "Slide 1",
            image: "200.png"
          },
          {
            title: "Slide 2",
            image: "300.png"
          },
          {
            title: "Slide 3",
            image: "500.png"
          }
        ]
      }
    ];
  }
};
</script>

<style>
.home {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: stretch;
  align-content: space-around;
  width: 100%;
}

.tour-cards {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  border: 1px solid green;
  width: inherit;
}
</style>
