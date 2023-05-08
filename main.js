import "./style.css";

async function renderWorkerData() {
  const response = await fetch(`https://tw.jbc343.workers.dev`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();

  document.querySelector("#result").innerHTML = `
  <div>
  <p> ${data.squadName} </p>
  </div>
`;
}
async function postToWorker() {
  // const data = {
  //   squadName: "Mega Heroes",
  //   hometown: "Paris",
  // };
  const data = { squadName: "warp", hometown: "bla" };

  const response = await fetch("https://tw.jbc343.workers.dev", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  console.log(result.message);
}

function init() {
  renderWorkerData();
}
init();
document.querySelector("#submit-btn").addEventListener("click", postToWorker);
