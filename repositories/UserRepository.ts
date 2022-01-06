import { Axios } from "axios"

const ApiRepository = ($axios: Axios) => ({
  getUser () {
    return $axios.get('/user')
  }
})

export default ApiRepository
