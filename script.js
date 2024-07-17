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



const getPopularityColor = function(pop){
  if(pop>=8)
    return "green"
  else 
     {
    if(pop>=5)
           return "orange"
    else
         return "red"       
     }
  }

let URL;
movie.forEach((ele)=>ele.remove())


window.addEventListener("keypress",function(e){
    //console.log(e.key)
    
    if (e.key==="Enter"){
      e.preventDefault();
      let x = search.value
      if(x!=""){
        URL=SEARCH_URL+x;
        document.querySelectorAll(".movie").forEach((ele)=>ele.remove())
      }else
      {
        URL=API_URL;
        document.querySelectorAll(".movie").forEach((ele)=>ele.remove())
      }
     //////////////////GET FROM API////////////////////
     fetch(URL,options)
        .then((response) => response.json())
        .then((response) =>
        {
          console.log(response)
         response.results.forEach(element => {
         main.insertAdjacentHTML("beforeend", `<div class="movie">
          <img src=${IMG_PATH+element.poster_path} alt="Movie">
          <div class="movie-info">
              <h3>${element.title}</h3>
              <span class=${getPopularityColor(element.vote_average)}>${element.vote_average}</span>
          </div>
          <div class="overview">
              <h3>Overview</h3>
              ${element.overview}
          </div>`)
      
          console.log(element)
         });
        }).catch((err) => console.error(err))

    }
    
  })
         







  

    
   
 


