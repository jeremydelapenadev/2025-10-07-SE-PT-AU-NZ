/* LAB EXERCISE 1: (page 15)
[/] Using the following starter code, complete the BitcoinRates component to fetch and display the current price of Bitcoin in the selected currency.
[/] Use a useEffect hook with cleanup and appropriate dependencies. */

import { useState } from "react";
import { useBitCoinRate } from "../hooks/useBitCoinRate"; // custom hook
import { useContext } from "react";
import { EmojiContext } from "../context/EmojiProvider";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export default function BitCoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { price, loading } = useBitCoinRate(currency); // this is in curly brackets because we are using object destructuring.
  const { currentMood, swapBetweenMoods } = useContext(EmojiContext); // STEP 3. Use the context.

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        <strong>Choose currency:</strong>{" "}
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {currencies.map((curr) => (
            <option value={curr} key={curr}>
              {curr}
            </option>
          ))}
        </select>
      </label>
      <div>
        <strong>Bitcoin Rate: </strong>
        {loading ? "Loading..." : `${price} ${currency}`}
      </div>
      <div style={{ marginTop: "10px" }}>
        <strong>Current Mood:</strong> {currentMood?.emoji} {currentMood?.name} {" "}
        <button onClick={swapBetweenMoods}> 
            Change Mood</button>
      </div>
    </div>
  );
}