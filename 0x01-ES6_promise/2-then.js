export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'successs' }))
    .catch(() => Error())
    .finally(() => { console.log('Got a response from the API'); });
}
