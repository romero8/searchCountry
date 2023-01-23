import "./Countries.css";
import { apiURL } from "../util/api";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "../Search/Search";
import { Filter } from "../Filter/Filter";

export function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((apiCountries) => {
        setCountries(apiCountries);
      });
  }, []);

  console.log(countries);

  return (
    <>
      <div className="countriesContainer">
        <div className="searchContainer">
          <Search />
          <Filter />
        </div>

        <div className="countries">
          {countries.map((country) => {
            return (
              <Link to={`/country/${country.name.common}`}>
                <div className="countryCard">
                  <div className="img">
                    <img src={country.flags.png} />
                  </div>
                  <h3>{country.name.common}</h3>
                  <h6>
                    {" "}
                    Population:{" "}
                    {new Intl.NumberFormat().format(country.population)}
                  </h6>
                  <h6>Region:{country.region}</h6>
                  <h6>Capital:{country.capital}</h6>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
