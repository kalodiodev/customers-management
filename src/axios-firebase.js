import axios from 'axios'
import config from '@/config'

const instance = axios.create({
  baseURL: config.axios.baseURL
})

export default instance
