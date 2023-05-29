// Fonctionnalité n°1
function footer1 (){
  //On sélectionne le footer
  let footer_1 = document.querySelector('footer');

  //On utilise la méthode addEventListener pour gérer des évènements
  footer_1.addEventListener('click', function(){console.log('Fonction. 1 : Clique')});
}


// Fonctionnalité n°1-bis
function footer1_bis (){
  let count = 0
  let footer_2 = document.querySelector('footer');

  footer_2.addEventListener('click', function(){console.log(`Fonction. 1_bis : Clique #${count}`)});
  footer_2.addEventListener('click', function(){count +=1});
}

// Fonctionnalité n°2
function hamburger (){
  let hamburger_menu = document.getElementsByClassName('navbar-toggler')[0];

  hamburger_menu.addEventListener('click', function(){console.log(navbarHeader.classList.toggle("collapse"))});
}

// Fonctionnalité n°3
function card_1_red (){
  let button_card_1 = document.getElementsByClassName('card-body')[0].getElementsByClassName('btn btn-sm btn-outline-secondary')[0];

  button_card_1.addEventListener('click',function(){button_card_1.style.color = "red"});
}

// Fonctionnalité n°4
function card_2_green (){
  let button_card_2 = document.getElementsByClassName('card-body')[1].getElementsByClassName('btn btn-sm btn-outline-secondary')[0];

  button_card_2.addEventListener('click',function(){
    if (button_card_2.style.color === 'green'){
      button_card_2.style.color = 'grey';
    } else {
        button_card_2.style.color = 'green';
      }
  });
}

// Fonctionnalité n°5
function remove_CDN (){
  let nav_bar = document.getElementsByClassName('navbar navbar-dark bg-dark box-shadow')[0];
  let linkElement = document.querySelector('link[rel="stylesheet"]');

  console.log(nav_bar)
  console.log(`Cliques sur la navbar pour remettre le bootstrap : objet ci-dessus`)

  nav_bar.addEventListener('dblclick',function(){ 
    if (linkElement) {
      linkElement.parentNode.removeChild(linkElement);
      linkElement = document.querySelector('link[rel="stylesheet"]');
    } else {
      // Créer un nouvel élément <link>
      let newLink = document.createElement('link');
      // Définir les attributs du lien
      newLink.rel = 'stylesheet';
      newLink.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
      newLink.integrity = 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T';
      newLink.crossOrigin = 'anonymous';
      // Sélectionner l'en-tête de la page (<head>)
      let headElement = document.querySelector('head');
      // Ajouter le nouvel élément <link> à l'en-tête
      headElement.appendChild(newLink);
      linkElement = newLink;
    }
  })
}

// Fonctionnalité n°6
function cards_view () {
  let cards = document.getElementsByClassName('col-md-4');
  let check = 0 ;

  function modifCards () {
    let card = this;
    let card_body = card.getElementsByClassName('card-body')[0];
    let card_image = card.getElementsByClassName('card-img-top')[0];
    let card_text = card.getElementsByClassName('card-text')[0];

    if (card_text.style.display !== 'none') {
      // Texte
      card_text.style.display = "none"; 

      // Image
      card_image.style.width = '20%';
      card_image.style.height = '20%';

      // Check 
      check = 1 ;
    } else {
      // Texte
      card_text.style.display = "block";

      // Image
      card_image.style.width = '100%';
      card_image.style.height = '100%';

      // Check
      check = 0;
    }
  }

  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.addEventListener('mouseenter', modifCards);
  }
}

// Fonctionnalité n°7
function cha_tourne (){
  let grey_button = document.getElementsByClassName('btn btn-secondary my-2')[0];
  let my_row = document.getElementsByClassName('album py-5 bg-light')[0].getElementsByClassName('row')[0];

  grey_button.addEventListener('click',function(){
    let last_card = document.getElementsByClassName('col-md-4')[5];
    my_row.insertBefore(last_card, my_row.firstChild);
  })
}

// Fonctionnalité n°8
function cha_tourne_otherway (){
  let blue_button = document.getElementsByClassName('btn btn-primary my-2')[0];
  let my_row = document.getElementsByClassName('album py-5 bg-light')[0].getElementsByClassName('row')[0];

  blue_button.addEventListener('click',function(event){
    event.preventDefault();

    let first_card = document.getElementsByClassName('col-md-4')[0];
    my_row.appendChild(first_card);
  })
}

// Fonctionnalité n°9
function challenge() {
  let logo = document.getElementsByClassName('navbar-brand d-flex align-items-center')[0];
  let my_body = document.querySelector('body');

  document.addEventListener('selectionchange', function() {
    let selectedText = window.getSelection().toString();
    if (selectedText !== logo.textContent) {
      document.addEventListener('keydown', function(event) {
        if (event.key === 'a') {
          my_body.classList.add('col-4')
        }
        if (event.key === 'y') {
          my_body.classList.add('col-4')
          my_body.classList.add('offset-md-4')
        }
        if (event.key === 'p') {
          my_body.classList.add('col-4')
          my_body.classList.add('offset-md-8')
        }
        if (event.key === 'b') {
          my_body.classList.remove('col-4')
          my_body.classList.remove('offset-md-8')
          my_body.classList.remove('offset-md-4')
        }
      });
    }
  });
}

// CALL FUNCTIONS -------------
footer1() // #1
footer1_bis() // #1_bis
hamburger () // #2 
card_1_red () // #3 
card_2_green () // #4
remove_CDN () // #5
cards_view () // #6
cha_tourne() // #7
cha_tourne_otherway() // #8
challenge () // #9
