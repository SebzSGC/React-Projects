export async function getImage(fact) {
  const firstWord = fact.split(' ', 3).join(' ')
  const response = await fetch(
    `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`
  )
  const data = response.url
  return data
}
