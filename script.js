const divElements = document.querySelectorAll('.col-md-8');
//const titleElement = this.querySelector('.titre');

divElements.forEach(divElement => {
  divElement.addEventListener('mouseover', function() {
    this.style.backgroundColor = "#65431E";
    this.style.color = "#2F2F2F";
    //titleElement.style.color = "white";
    
  });
});

divElements.forEach(divElement => {
  divElement.addEventListener('mouseout', function() {
    this.style.backgroundColor = "";
    this.style.color = "";
  });
});


/*function bitcoinTempsReelEUR(){
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(data => {
    const euroLast = data.EUR.last;
    console.log(euroLast);
    document.querySelector('#price_label_eur').textContent = euroLast;
  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
  });
}

function bitcoinTempsReelUSD(){
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(data => {
    const usdLast = data.USD.last;
    console.log(usdLast);
    document.querySelector('#price_label_usd').textContent = usdLast;
  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
  });
}

bitcoinTempsReelEUR();

setInterval(bitcoinTempsReelEUR, 10000);
  

bitcoinTempsReelUSD();

setInterval(bitcoinTempsReelUSD, 10000);*/

const url = 'https://blockchain.info/ticker';

function recupererPrix() {
  // Créer une requête
  let requete = new XMLHttpRequest(); // Créer un objet
  requete.open('GET', url); // Premier paramètre GET / POST, deuxième paramètr : url
  requete.responseType = 'json'; // Nous attendons du JSON
  requete.send(); // Nous envoyons notre requête

  // Dèss qu'on reçoit une réponse, cette fonction est executée
  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response; // on stock la réponse
        let prixEnEuros = reponse.EUR.last;
        document.querySelector('#price_label_eur').textContent = prixEnEuros;
      }
      else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
  console.log('Prix actualisé');
}

setInterval(recupererPrix, 1000);