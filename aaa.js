
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// // const getJSON = function (url, errorMsg = 'Something went wrong') {
// //   return fetch(url).then(response => {
// //     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

// //     return response.json();
// //   });
// // };

// const getCountryAndNeighbour = function (country) {
//   const baseURL = "https://restcountries.com/v2";
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET',`${baseURL}/name/${country}`);
//   request.send();

// const html =`
// <article class="country">
//           <img class="country__img" src="" />
//           <div class="country__data">
//             <h3 class="country__name">${country}</h3>
//             <h4 class="country__region">REGION</h4>
//             <p class="country__row"><span>👫</span>POP people</p>
//             <p class="country__row"><span>🗣️</span>LANG</p>
//             <p class="country__row"><span>💰</span>CUR</p>
//           </div>
//         </article>

// `
// countriesContainer.insertAdjacentHTML( `<article class="country">
// <img class="country__img" src="" />
// <div class="country__data">
//   <h3 class="country__name">${country}</h3>
//   <h4 class="country__region">REGION</h4>
//   <p class="country__row"><span>👫</span>POP people</p>
//   <p class="country__row"><span>🗣️</span>LANG</p>
//   <p class="country__row"><span>💰</span>CUR</p>
// </div>
// </article>
// `) =



// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     // Render country 1
// //     renderCountry(data);

// //     // Get neighbour country (2)
// //     const neighbour = data.borders;

// //     if (!neighbour.length) return;

// //     // AJAX call country 2

// //     for (let i = 0; i < neighbour.length; i++) {
// //       const request2 = new XMLHttpRequest();
// //       request2.open('GET', `${baseURL}/alpha/${neighbour[i]}`);
// //       request2.send();

// //       request2.addEventListener('load', function () {
// //         const data2 = JSON.parse(this.responseText);
// //         console.log(data2);

// //         renderCountry(data2);
// //       });
// //     }
// //   });
// };

// getCountryAndNeighbour('Armenia');
// // getCountryAndNeighbour('usa');
// // getCountryAndNeighbour('germany');

