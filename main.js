import './style.css'

async function getData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomNumber()}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  
  function randomNumber() {return Math.floor(Math.random() * 100)}

  document.querySelector('#app').innerHTML = `
  <div>
  <p> ${data.title} </p>
  </div>
`

}

getData();

