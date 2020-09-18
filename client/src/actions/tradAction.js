export const getTrads = (url) => async (dispatch) => {
  console.log(url.url);

  fetch(url.url, {
    method: 'GET',
  })
    .then((myJson) => {
      console.log('fetch', myJson);
    })
    .catch((err) => {
      console.log('Fetch Error', err);
    });
};
