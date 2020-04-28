import fetchIntercept from "fetch-intercept";

export default fetchIntercept.register({
  request: function (url, config) {
    // Modify the url or config here
    console.log("url, ", url);
    return [url, config];
  },

  requestError: function (error) {
    // Called when an error occured during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: function (response) {
    // Modify the reponse object
    return response.json();
  },

  responseError: function (error) {
    // Handle an fetch error

    return Promise.reject(error);
  },
});
