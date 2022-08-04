import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const list = document.querySelector(".country-list");
const URL = `https://restcountries.com/v3.1/all?fields=name,capital,population,flags,languages`;

fetch(URL)
.then((response) => response.json())
// .then((data) => {console.log(data)})
.then((data) => {insertContent(data)})
.catch((error) => {});

const createListItem = (item) => `<li>
<img src="${item.flags.svg}" alt="flag" width=60 height=40>
<h2>${item.name.official}</h2>
<p> Capital: ${item.capital}</p>
<p> Population: ${item.population}</p>
<p> Languages: ${item.languages}</p>
</li>`;

const generateContent = (arr) => arr.reduce((acc, item) => acc + createListItem(item), "");

const insertContent = (arr) => {
    const result = generateContent(arr);
    list.insertAdjacentHTML("beforeend", result);
}