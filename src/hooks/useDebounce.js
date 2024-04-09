import { useEffect, useState } from 'react'


const useDebounce = (value, delay = 500) => {

  const [debouncedValue, setDebouncedValue] = useState(value)
  const [debounceLoading, setDebounceLoading] = useState(false)

  useEffect(()=>{
      setDebounceLoading(true)
    const id = setTimeout(() => {
        setDebounceLoading(false)
        setDebouncedValue(value)
    }, delay);

    return () => {
        clearTimeout(id)
    }
  },[value, delay])

  return {debouncedValue, debounceLoading}
}

export default useDebounce