console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  try {
    const response = await fetch("https://swapi.py4e.com/api/people");

    if (response.ok) {
      const data = await response.json();
      console.log(data.results[2].eye_color);
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred");
  }
}

fetchData();
