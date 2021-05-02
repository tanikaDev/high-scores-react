import React from 'react'

function CountryFlag({country}) {

    let countryFlags = [{
      country: "Ethiopia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Ethiopia_%28Blank%29.svg",
    },
    {
      country: "Scotland",
      flag: "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg",
    },
    {
      country: "England",
      flag: "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg",
    },
    {
      country: "Brazil",
      flag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
    },
    {
      country: "Colombia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
    },
    {
      country: "Turkey",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
    },
    {
      country: "Iran",
      flag: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg",
    },
    {
      country: "Bangladesh",
      flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
    }];
  
    let countryFlagSrc = "";
    for (let i = 0; i < countryFlags.length; i++){
      let currentCountry = countryFlags[i];
      if (currentCountry.country.includes(country)) {
        countryFlagSrc = currentCountry.flag;
      }
    }
    return (
      <>
          <img className="col-2 col-md-2 col-lg-1" src={countryFlagSrc} alt="country" />
      </>
    );
  }

  export default CountryFlag