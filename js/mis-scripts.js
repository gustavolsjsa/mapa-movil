$(function(){
    

  var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})


// // ------------------------------LEAFLET PARA PC---------------------------------

// //se crea una variable llamada my map
// //Llama una vista con coordenadas X y las posiciona dentro de la sección con id mapid
// //usando la libreria map, la L se refiere a libreria
// var mymap = L.map('mapid').setView([19.428044616746142, -99.18287568534622], 13);

// //https://leaflet-extras.github.io/leaflet-providers/preview/
// //De ahi tomamos ejemplos de mapas
// //llama a openstreet maps, con un zoom X y agrega una referencia de atribución
// //da varias especificaciones y las agrega a la variable anterior mymap

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 	maxZoom: 19,
// 	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(mymap);

// //marcador de posicion, se deben especificar unas coordenadas
// var marker = L.marker([19.428044616746142, -99.18287568534622]).addTo(mymap);

// //agregar circulo, se pueden personalizar algunos atributos, el radio esta en metros
// var circle = L.circle([19.428044616746142, -99.18287568534622], {
//   color: 'red',
//   fillColor: '#f03',
//   fillOpacity: 0.2,
//   radius: 500
// }).addTo(mymap);


// //poligono delimitando un area
// var polygon = L.polygon([
//   [19.418044616746142, -99.19287568534622],
//   [19.438044616746142, -99.20287568534622],
//   [19.398044616746142, -99.17287568534622]
// ]).addTo(mymap);

// //popUps que se relacionan con cada uno de los elementos anteriores
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");


// // ------------------------------LEAFLET PARA MOVIL---------------------------------

//aqui la variable tiene un nombre diferente pero el id es el mismo
var   map = L.map('mapid').setView([19.428044616746142, -99.18287568534622], 5);

//aqui la vista inicial es de todo el mundo
// var map = L.map('mapid').fitWorld();

//Este es el provedor del mapa
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 25,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(map);

//esta es la funcion para localizar nuestra ubicación
map.locate({setView: true, maxZoom: 16});