var obj1 = {
    name: "Person 1",
    age:5
  };
      
  const obj2 = {
       age:5, 
       name: "Person 1" };
       var eq = obj1 == obj2;
       console.log("Object comparison:",eq);
       var eq1 = JSON.stringify(obj1)==JSON.stringify(obj2);
       console.log("JSON COMPARISON:",eq1);

//  object1===object2

const getCountries = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        const countries = xhr.response;
    for(let countryDetails of countries){
              
        console.log("Country Name:",countryDetails.capital);
        console.log("Flags:",countryDetails.flags);
    }
    };
};

getCountries ();

const getCountries1 = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        const countries1 = xhr.response;
    for(let countryDetails1 of countries1){
              
        console.log("Country Name:",countryDetails1.capital);
        console.log("Region:",countryDetails1.region);
        console.log("SubRegion:",countryDetails1.subregion);
        console.log("Population:",countryDetails1.population);
    }
    };
};

// getCountries1 ();