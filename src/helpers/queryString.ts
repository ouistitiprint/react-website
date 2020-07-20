import qs from "query-string";
import { useState, useCallback } from "react";

// Modify the code from this article: https://medium.com/swlh/using-react-hooks-to-sync-your-component-state-with-the-url-query-string-81ccdfcb174f

const setQueryStringWithoutPageReload = (qsValue:string) => {
  const newurl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    qsValue;
  window.history.pushState({ path: newurl }, "", newurl);
};

export const getQueryStringValue = (
  key:string,
  queryString = window.location.search
) => {
  const values = qs.parse(queryString);
  return values[key];
};

export const getPaymentStatus = (
    queryString = window.location.search
  ) => {
    const values = qs.parse(queryString);
    const paymentStatus = values["status"];
    if (paymentStatus) {
        if (typeof paymentStatus === "string") {
            return paymentStatus;
        } else {
            return paymentStatus[0];
        }
        
    } else {
        return "shopping";
    }
  };

export const setQueryStringValue = (
  key:string,
  value:string,
  queryString = window.location.search
) => {
  const values = qs.parse(queryString);
  const newQsValue = qs.stringify({
    ...values,
    [key]: value
  });
  setQueryStringWithoutPageReload(`?${newQsValue}`);
};

function useQueryString(key:string, initialValue?:string) {
    const [value, setValue] = useState(getQueryStringValue(key) || initialValue);
    // const onSetValue = useCallback(
    //   newValue => {
    //     setValue(newValue);
    //     setQueryStringValue(key, newValue);
    //   },
    //   [key]
    // );
    
    // const onSetValue = (newValue: string) => {
    //     setValue(newValue);
    //     setQueryStringValue(key, newValue);
    // }
  
    // return [value, onSetValue];
    return [value, setValue];
  }

export default useQueryString;