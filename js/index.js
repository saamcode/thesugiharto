let card = document.querySelectorAll("#card");

let semua_kategori = document.querySelector('.semua-kategori');

let ui_card = document.querySelectorAll(".card-ui");

let ui_design = document.querySelector('.ui-design');

let web_card = document.querySelectorAll('.card-web');

let web_dev = document.querySelector('.web-dev');

let mbl_card = document.querySelectorAll('.card-mbl');

let mbl_dev = document.querySelector('.mbl-dev');

// THIS IS FOR SHOW ALL SKILL CARDS
let showAll = function () {
  for(let i = 0; i < card.length; i++) {
    card[i].style.display = 'block';
  }

  semua_kategori.style.color = '#FFF';

  ui_design.style.color = 'rgba(255, 255, 255, 0.6)';

  web_dev.style.color = 'rgba(255, 255, 255, 0.6)';

  mbl_dev.style.color = 'rgba(255, 255, 255, 0.6)';
}

// THIS IS FOR SHOW UI DESIGN CARDS
let showUi = function () {
  for(let i = 0; i < ui_card.length; i++) {
    ui_card[i].style.display = 'block';
  }

  for(let i = 0; i < web_card.length; i++) {
    web_card[i].style.display = 'none';
  }

  for(let i = 0; i < mbl_card.length; i++) {
    mbl_card[i].style.display = 'none';
  }
  
  ui_design.style.color = '#FFF';

  semua_kategori.style.color = 'rgba(255, 255, 255, 0.6)';

  web_dev.style.color = 'rgba(255, 255, 255, 0.6)';
  
  mbl_dev.style.color = 'rgba(255, 255, 255, 0.6)';
}

// THIS IS FOR SHOW WEB DEV CARDS
let showWeb = function () {
  for(let i = 0; i < web_card.length; i++) {
    web_card[i].style.display = 'block';
  }

  for(let i = 0; i < ui_card.length; i++) {
    ui_card[i].style.display = 'none';
  }

  for(let i = 0; i < mbl_card.length; i++) {
    mbl_card[i].style.display = 'none';
  }
  
  web_dev.style.color = '#FFF';

  semua_kategori.style.color = 'rgba(255, 255, 255, 0.6)';

  ui_design.style.color = 'rgba(255, 255, 255, 0.6)';
  
  mbl_dev.style.color = 'rgba(255, 255, 255, 0.6)';
}

// THIS IS FOR SHOW MOBILE DEV CARDS
let showMobile = function () {
  for(let i = 0; i < mbl_card.length; i++) {
    mbl_card[i].style.display = 'block';
  }

  for(let i = 0; i < web_card.length; i++) {
    web_card[i].style.display = 'none';
  }

  for(let i = 0; i < ui_card.length; i++) {
    ui_card[i].style.display = 'none';
  }
  
  mbl_dev.style.color = '#FFF';

  semua_kategori.style.color = 'rgba(255, 255, 255, 0.6)';

  ui_design.style.color = 'rgba(255, 255, 255, 0.6)';

  web_dev.style.color = 'rgba(255, 255, 255, 0.6)';
}