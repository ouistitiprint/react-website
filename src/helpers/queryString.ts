import qs from "query-string";

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