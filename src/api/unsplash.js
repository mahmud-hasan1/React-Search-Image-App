import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    Authorization: 
      'Client-ID 701c065ab916d2471de0a92d364330caa5d045b10ae947b3e68b67d081d86132'
  }
})
