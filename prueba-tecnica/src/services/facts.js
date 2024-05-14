const FACT_ENDPOINT_URL = 'https://catfact.ninja/fact'
export async function getFact() {
  const response = await fetch(FACT_ENDPOINT_URL)
  const data = await response.json()
  const { fact } = data
  return fact
}
