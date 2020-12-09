// POPULAR FILMS
// fetch(popular).then((reponse) => {
//   return reponse.json();
// }).then((data) => {
//   const content_popular = data.results;
//   // console.log(content_popular);
//   content_popular.forEach(movie => {
//     // console.log(movie['original_title']);
//     document.querySelector('#popular').insertAdjacentHTML("beforeend", `<img src="${posterUrl}${movie['poster_path']}" class="posters"/>`);
//   });
//   // console.log(content_popular); 
// });


// // TOP RATED FILMS
// fetch(top_rated).then((reponse) => {
//   return reponse.json();
// }).then((data) => {
//   const content_top = data.results;
//   // console.log(content_top);
//   content_top.forEach(movie => {
//     // console.log(movie['original_title']);
//     document.querySelector('#top_rated').insertAdjacentHTML("beforeend", `<img src="${posterUrl}${movie['poster_path']}" class="posters"/>`);
//   });
//   // console.log(content_top); 
// });