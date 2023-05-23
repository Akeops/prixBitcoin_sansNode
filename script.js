const divElements = document.querySelectorAll('.col-md-8');
//const titleElement = this.querySelector('.titre');

divElements.forEach(divElement => {
  divElement.addEventListener('mouseover', function() {
    this.style.backgroundColor = "#F3EEE7";
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

const url = 'https://blockchain.info/ticker';

function recupererPrixEUR() {
  // Créer une requête
  let requete = new XMLHttpRequest(); // Créer un objet
  requete.open('GET', url); // Premier paramètre GET / POST, deuxième paramètr : url
  requete.responseType = 'json'; // Nous attendons du JSON
  requete.send(); // Nous envoyons notre requête

  // Dès qu'on reçoit une réponse, cette fonction est executée
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
  console.log("allo");
}
recupererPrixEUR();
setInterval(recupererPrixEUR, 5000);

function recupererPrixUSD() {
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
        let prixEnDollars = reponse.USD.last;
        document.querySelector('#price_label_usd').textContent = prixEnDollars;
      }
      else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
}
recupererPrixUSD();
setInterval(recupererPrixUSD, 5000);

function recupererPrixGBP() {
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
        let prixEnLivres = reponse.GBP.last;
        document.querySelector('#price_label_gbp').textContent = prixEnLivres;
      }
      else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
  console.log("prix actualisé");
}
recupererPrixGBP();
setInterval(recupererPrixGBP, 5000);