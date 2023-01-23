import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Country.css";

export function Country() {
  let { countryName } = useParams();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => res.json())
      .then((apiCountries) => {
        setCountries(apiCountries);
      });
  }, []);

  console.log(countries);

  return (
    <>
      <div className="countriesContainer">
        <div className="countryCardContainer">
          {countries.map((country) => {
            return (
              <div>
                <Link to={"/"}>Back</Link>
                <div className="country">
                  <div className="img">
                    <img src={country.flags.png} />
                  </div>
                  <h3>{country.name.common}</h3>
                  <span>
                    <h5>
                      {" "}
                      Population:{" "}
                      {new Intl.NumberFormat().format(country.population)}
                    </h5>
                  </span>
                  <span>
                    <h5>Region:{country.region}</h5>
                  </span>
                  <span>
                    <h5>Capital:{country.capital}</h5>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
