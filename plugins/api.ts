import axios from 'axios'
import createRepository from '~~/repositories'

export default (_nuxtApp: any, inject: any) => {
	inject('api', createRepository(axios))
}
