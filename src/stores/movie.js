import { defineStore } from "pinia";
import axios from "axios";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    search: null,
    movies: [],
    movieCount: 0,
    singleMovie: null,
  }),
  getters: {},
  actions: {
    async searchMovies() {
      if (this.search != "") {
        const { data } = await axios.get(
          `http://www.omdbapi.com/?apikey=e2037866&s=${this.search}`
        );
        this.movies = data.Search;
        this.movieCount = data.totalResults;
      }
    },
    async getSingleMovie(id) {
      if (this.search != "") {
        const { data } = await axios.get(
          `http://www.omdbapi.com/?apikey=e2037866&i=${id}&plot=full`
        );

        console.log(data);
        this.singleMovie = data;
      }
    },
  },
});
