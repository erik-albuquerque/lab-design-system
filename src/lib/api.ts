import axios from 'axios'

const api = axios.create({
  baseURL: 'https://erik-albuquerque.github.io' || 'http://localhost:6006',
})

export { api }
