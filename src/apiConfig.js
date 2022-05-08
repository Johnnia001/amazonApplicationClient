let apiUrl
const apiUrls = {
  production: 'http://tranquil-stream-27269.herokuapp.com/',
  development: 'http://localhost:8080'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
