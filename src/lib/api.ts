import axios from 'axios'

const api = axios.create({
  baseURL: process.env.BASE_URL || 'https://erik-albuquerque.github.io',
})

export { api }
