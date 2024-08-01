import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    search: ref(null),
    movies: ref([]),
    singleMovie: null,
    movieCount: ref(0),
  }),
  getters: {},
  actions: {
    async searchMovies() {
      if (this.search != "") {
        const { data } = await axios.get(
          `http://www.omdbapi.com/?apikey=e2037866&s=${this.search}`
        );
        // console.log(data);
        this.movies = data.Search;
        this.movieCount = data.totalResults;
      }
    },
    async getSingleMovie(id) {
      if (this.search != "") {
        const { data } = await axios.get(
          `http://www.omdbapi.com/?apikey=e2037866&i=${id}&plot=full`
        );
        this.singleMovie = data;
      }
    },
  },
});
