import "./style.css";

async function renderWorkerData() {
  const response = await fetch("api");
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();

  document.querySelector("#result").innerHTML = `
  <div>
  <p> ${data.title} </p>
  </div>
`;
}
async function postToWorker() {
  const input = document.querySelector("#user-input").value;
  const data = { wineryNumber: +input };

  const response = await fetch("api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
}

function init() {
  renderWorkerData();
}
init();
document.querySelector("#submit-btn").addEventListener("click", postToWorker);
