import axios from 'axios'
import config from '@/config'

const instance = axios.create({
  baseURL: config.axios.authBaseURL
})

export default instance
