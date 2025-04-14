import { defineStore } from 'pinia'
import axios from 'axios'

export const useMovieStore = defineStore('movie',{
state:()=>({
  search: '',
  movies:[]
}),
getters:{},
actions:{
 async searchMovies(){
    if(this.search !=""){
    const value= await axios.get(`http://www.omdbapi.com/?apikey=${import.meta.env.apiKey}&s=${this.search}`);
    console.log(value);
    }
  }
}
})
