/* LAB EXERCISE 2: (page 34)
[/] Update your BitcoinRates component to use a custom hook for extracting the external data synchronization process
[ ] Extension: Implement useReducer to handle the internal state management of your custom hook. */

import { useState, useEffect } from "react"

export function useBitCoinRate(currency) {
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(true);

  //useEffect (page 11)
  useEffect(() => {
    // Create a remote control that can cancel this fetch request (for cleanup)
    const controller = new AbortController();

    /* Note: 
    When you fetch data, it might:
        - take time
        - still be running when the component re-renders
        - still be running when the component unmounts

    Without cleanup, that can cause:
        - memory leaks
        - React warnings
        - state updates on unmounted components

    So we create a controller that can cancel it.
    */

    setLoading(true);

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}`, 
      { signal: controller.signal } // If this signal gets aborted, cancel the request from the fetch.
    )
      .then((response) => response.json())
      .then((json) => {
        setPrice(json.bitcoin[currency.toLowerCase()]);
        setLoading(false);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
            console.error(error);
        }
      });

      // clean up (before the effect runs again / when the component unmounts)
      return () => {
        controller.abort();
      };
  }, [currency]);

  return { price, loading }; {/* This is returning an object from your custom hook. */}
}

/* Notes:

  Imagine this happens:
    1. User selects USD
    2. Fetch starts
    3. Before it finishes, user quickly selects AUD
    4. Another fetch starts

    Now two requests are running.

        Without cleanup:
            - The USD request might finish AFTER the AUD request
            - It could overwrite your state with the wrong value
            - You get weird bugs

        With cleanup -- When currency changes:
            - React runs cleanup
            - controller.abort() cancels old request
            - New request starts cleanly

  React Lifecycle Flow:
    1️⃣ React runs cleanup from previous effect
    2️⃣ controller.abort() cancels old fetch
    3️⃣ React runs the effect again
    4️⃣ New controller created
    5️⃣ New fetch starts

*/

////////////////////////////////////////////////////////////////////////////////

/* EXTENSION: Code for useReducer

import { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  price: null,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { loading: true, price: null, error: null };
    case "FETCH_SUCCESS":
      return { loading: false, price: action.payload, error: null };
    case "FETCH_ERROR":
      return { loading: false, price: null, error: action.payload };
    default:
      return state;
  }
}

export function useBitcoinRate(currency) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const controller = new AbortController();

    dispatch({ type: "FETCH_START" });

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}`,
      { signal: controller.signal }
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: json.bitcoin[currency.toLowerCase()],
        });
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          dispatch({ type: "FETCH_ERROR", payload: error });
        }
      });

    return () => controller.abort();
  }, [currency]);

  return state;
}

*/

/* useReducer is better when:
  - You have multiple related pieces of state
  - You want predictable transitions
  - You want scalable logic (like real apps) */