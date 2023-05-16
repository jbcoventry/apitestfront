async function fetchActorResults() {
  const response = await fetch("api");
  if (!response.ok) {
    throw new Error(`unexpected response ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}
export default fetchActorResults;
