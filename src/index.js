const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
const navItems= document.querySelectorAll('header nav a');
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

navItems[0].setAttribute('class','italic');
navItems[1].setAttribute('class','italic');
navItems[2].setAttribute('class','italic');
navItems[3].setAttribute('class','italic');
navItems[4].setAttribute('class','italic');
navItems[5].setAttribute('class','italic');

//   navItems.forEach( (item,index) => {
//   let j = index+1;
//   item.textContent = siteContent["nav"]["nav-item-"+j]
//   item.setAttribute('class','italic');
// })

document.getElementById('logo-img').src = siteContent["images"]["logo-img"];
document.getElementById('cta-img').src = siteContent["images"]["cta-img"];
document.getElementById('middle-img').src = siteContent["images"]["accent-img"];



const mainText = document.querySelector(".cta-text");
mainText.querySelector('h1').textContent = siteContent["cta"]["h1"];
mainText.querySelector('button').textContent = siteContent["cta"]["button"];

const topContent = document.querySelectorAll(".top-content .text-content");

topContent[0].querySelector('h4').textContent = siteContent["ana-içerik"]["özellikler-h4"];
topContent[0].querySelector('p').textContent = siteContent["ana-içerik"]["özellikler-içerik"];
topContent[1].querySelector('h4').textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
topContent[1].querySelector('p').textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

const bottomContent = document.querySelectorAll(".bottom-content .text-content");

bottomContent[0].querySelector('h4').textContent = siteContent["ana-içerik"]["servisler-h4"];
bottomContent[0].querySelector('p').textContent = siteContent["ana-içerik"]["servisler-içeriği"];
bottomContent[1].querySelector('h4').textContent = siteContent["ana-içerik"]["ürünler-h4"];
bottomContent[1].querySelector('p').textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
bottomContent[2].querySelector('h4').textContent = siteContent["ana-içerik"]["vizyon-h4"];
bottomContent[2].querySelector('p').textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

const contact = document.querySelectorAll(".contact");

contact[0].querySelector('h4').textContent = siteContent["iletisim"]["iletişim-h4"];
const iletisimparagrafı = document.querySelectorAll('.contact p');
iletisimparagrafı[0].textContent = siteContent["iletisim"]["adres"];
iletisimparagrafı[1].textContent = siteContent["iletisim"]["telefon"];
iletisimparagrafı[2].textContent = siteContent["iletisim"]["email"];

const footer = document.querySelector('footer a');
footer.textContent = siteContent['footer']['copyright'];
footer.setAttribute('class','bold');
