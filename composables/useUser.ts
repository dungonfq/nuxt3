import axios from 'axios'
import { ref, readonly } from 'vue'

export default function () {
  const user = useState('user', () => ({ name: '' }))
  const loading = ref(false)

  const fetchUser = async () => {
    try {
      loading.value = true;
      await axios.get('/user')
      user.value = {
        name: 'Roadsurfer User'
      }
    } catch (error) {

    } finally {
      loading.value = false;
    }
  }
  return {
    user: readonly(user),
    loading: readonly(loading),
    fetchUser
  }
}
