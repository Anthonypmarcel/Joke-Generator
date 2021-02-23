document.querySelector('.jokes').addEventListener('submit', getAndPostJoke);

function getAndPostJoke(e) {
  const xhr = new XMLHttpRequest();
  const number = document.querySelector('#number').value

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    let output;
    if (this.status === 200) {
      const response = this.responseText;
      const chuckjoke = JSON.parse(response)
      
      let output = '';
      if (chuckjoke.type === 'success' && isNaN(number)) {
        const jookes = chuckjoke.value
        jookes.forEach(function (joke) {
          output += `<li>${joke.joke}</li>`
          
        });
      } else {
        output += '<li><h5>Chuck is not available...ERROR...</h5></li>'
      }
      document.querySelector('.readjoke').innerHTML = output 
  }
  }
  xhr.send();
  e.preventDefault();
}

