import { useEffect, useState } from 'react'
import { getImage } from '../services/image'

export function useCatImage({ fact }) {
  const [factImage, setFactImage] = useState()

  useEffect(() => {
    if (!fact) return
    getImage(fact).then((image) => setFactImage(image))
  }, [fact])

  return { factImage }
}
