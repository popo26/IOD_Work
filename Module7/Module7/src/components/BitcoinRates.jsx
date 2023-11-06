import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export default function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState(0);

  // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}

  useEffect(() => {
    let ignore = false;
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
     
    )
      .then((response) => response.json()) // don't forget to add () because response is a function
      .then((result) => {
        console.log("This is the result of api", result);
        if (!ignore) {
          setPrice(result.bitcoin[currency.toLowerCase()]);
        }
      });

    return () => {
      ignore = true;
      console.log("cleanup function ran");
    };
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));
  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <p>
        Bitcoin price : {price} {currency}
      </p>
    </div>
  );
}
