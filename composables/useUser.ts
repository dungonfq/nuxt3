import axios from 'axios'
import { ref, readonly } from 'vue'

interface User {
  name: string
}

export default function () {
  const user = useState<User>('user', () => ({ name: '' }))
  const loading = ref(false)

  const fetchUser = async () => {
    try {
      loading.value = true;
      // await axios.get('/user')
      user.value = {
        name: 'Roadsurfer User'
      }
    } catch (error) {
      // TODO
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
