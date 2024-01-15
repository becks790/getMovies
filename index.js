async function getMovies(category) {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?api_key=40b8bcb59dad21e1c4841569c98e667c`
  );
  response = await response.json();

  let cols = "";
  let movies = response.results;

  for (let i = 0; i < movies.length; i++) {
    cols += `<div class="col-md-3 text-center">
  <div class="movieCard p-2 bg-primary-subtle text-center rounded mb-2">
  <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}" class="w-100 mb-sm-3 img-thumbnail" alt="">
  <h2 class = "text-danger mt-3 fw-bold ">${movies[i].original_title}</h2>
  <p class = "text-blac mt-3" >${movies[i].overview}</p>
   </div>
   </div>
 </div>`;
    document.querySelector(".row").innerHTML = cols;
  }
}

getMovies("now_playing");

let navElements = document.querySelectorAll("li a");

for (let i = 0; i < navElements.length; i++) {
  navElements[i].addEventListener("click", function (e) {
    let gategory = e.target.getAttribute("data-category");
    getMovies(gategory);
  });
}
