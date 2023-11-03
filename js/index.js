console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  const starWarsPeople = data.results;
  console.log(starWarsPeople);
  console.log(starWarsPeople[2].eye_color);
}

fetchData();
