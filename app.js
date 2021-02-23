document.querySelector('.jokes').addEventListener('submit', getAndPostJoke);

function getAndPostJoke(e) {
  const xhr = new XMLHttpRequest();
  const number = parseInt(document.querySelector('#number').value)

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    let output;
    if (this.status === 200) {
      const response = this.responseText;
      const chuckjoke = JSON.parse(response)
      
      let output = '';

      if (chuckjoke.type === 'success') {
        chuckjoke.value.forEach(function (joke) {
          output += `<li>${joke.joke}</li>` 
        });
      } else {
        output += `<li>Chuck is not available...ERROR...</li>`
      }
      document.querySelector('.readjoke').innerHTML = output 
  }
  }
  xhr.send();
  e.preventDefault();
}

