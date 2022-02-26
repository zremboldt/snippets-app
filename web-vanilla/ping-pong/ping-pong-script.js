
const pingBtn = document.querySelector('.ping-button');

const pingRails = async () => {
  const url = 'http://localhost:3000/pings';
  const body = { "message": "PING" };

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": 'application/json' },
    body: JSON.stringify(body)
  })

  const data = await response.json();
  console.log(data)

  const messageEl = `<h1>${data.message}</h1>`;
  document.body.insertAdjacentHTML('afterbegin', messageEl);
}

pingBtn.addEventListener('click', pingRails);
