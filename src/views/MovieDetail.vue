<script setup>
import { onMounted } from "vue";
import { useMovieStore } from "../stores/movie";
import { useRoute } from "vue-router";
const movieStore = useMovieStore();
const route = useRoute();
onMounted(() => {
  movieStore.getSingleMovie(route.params.id);
});
</script>
<template>
  <div class="movie-detail">
    <h3>{{ movieStore.singleMovie.Title }}</h3>
    <p>{{ movieStore.singleMovie.Year }}</p>
    <img :src="movieStore.singleMovie.Poster" class="movie-image" alt="" />
    <p>{{ movieStore.singleMovie.Plot }}</p>
  </div>
</template>

<style lang="scss">
.movie-detail {
  padding: 16px;

  h3 {
    color: #fff;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .movie-image {
    display: block;
    max-width: 200px;
    margin-bottom: 16px;
  }
  p {
    color: #fff;
    font-size: 18px;
    line-height: 1.4;
  }
}
</style>
