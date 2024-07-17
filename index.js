const API_URL ="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&page=2";
const SEARCH_URL ='https://api.themoviedb.org/3/search/movie?query=';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";


const main = document.querySelector("#main")

const form = document.getElementById("form")
const search = document.getElementById("search")
const text =document.querySelector(".textIn")
const movie =document.querySelectorAll(".movie")



const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjdiZWY3ZGJkMTc5NWZhOTEyZTQ4YWZlOGY0ZjA3ZSIsIm5iZiI6MTcyMTIxOTU3Ni45MTY0MjgsInN1YiI6IjY2OTdiODU2OGQ5YWRkNjViNzgxYjk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTHbxpjbRsnMAQl57z6YLSoqtYUJowBdhib9OikIMQI",
  },
};
