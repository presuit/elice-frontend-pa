import { ELICE_FILTER_CONDITION_MAP } from '@/api/constants'

export function findQueryKeyById(id: string) {
  let queryKey = null

  Object.entries(ELICE_FILTER_CONDITION_MAP).forEach(([key, value]) => {
    const keys = Object.keys(value)
    if (keys.includes(id)) {
      queryKey = key
    }
  })

  return queryKey
}
