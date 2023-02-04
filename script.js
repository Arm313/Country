const countriesContainer = document.querySelector(".countries");

const getCountryAndNeighbour = function (country) {
  const baseURL = "https://restcountries.com/v2/name/";
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open("GET", `${baseURL}${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    countriesContainer.insertAdjacentHTML(
      "beforebegin",
      `<article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${data.population}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].nativeName}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>
    `
    );
  });
};

getCountryAndNeighbour("armenia");
