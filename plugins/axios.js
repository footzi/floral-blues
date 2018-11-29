import axios from 'axios'

export default axios.create({
  baseURL:  environment.API_URL || 'http://localhost:3000'
})