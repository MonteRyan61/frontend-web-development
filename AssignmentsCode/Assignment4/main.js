
fetch("https://api.chucknorris.io/jokes/random",{
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
})
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json.value);
        const jokeInsert = document.createElement('h4');
        jokeInsert.innerText = json.value;
        document.body.appendChild(jokeInsert);
    })
    .catch((error) => {
        console.error(error);
    });
