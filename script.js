const BASE_URL = "https://restcountries.com/v2/all"
// three types of functions
const dummyData = { "dummy data": "123" }

function turnDataIntoJson(response) {
  return response.json()
}

function renderDataToDom(data) {
//  console.log(data);
  for (let i = 0; i < data.length; i++) {
    const country = data[i]
    const div = document.createElement("div")
    div.classList.add("country")

    const h2 = document.createElement("h2")
    h2.innerHTML = country.name
    div.append(h2)
    document.body.append(div)
  }
}
function displayCountryData(data) {
    // console.log(data);
     for (let i = 0; i < data.length; i++) {
       const country = data[i]
       const div = document.createElement("div")
       div.classList.add("population")
   
       const h2 = document.createElement("h2")
       h2.innerHTML = country.name
       const h3 = document.createElement("h3")
       h3.innerHTML = country.population
       const img = document.createElement("img")
       img.src= country.flag
       img.style.height = "220px"
       img.style.width = "220px" 
    //    img.width='500px';
       div.append(h3)
       div.append(h2)
       div.append(img)
       document.body.append(div)
     }
   }

function handleError() {
  alert("Something went wrong")
}

function getCountriesData() {
  return fetch(BASE_URL)
    .then(turnDataIntoJson)
    .then(displayCountryData)
    .catch(handleError)
}

getCountriesData()