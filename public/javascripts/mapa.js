var map = L.map('main_map').setView([14.0723, -87.1921], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var lista = document.getElementById('lista_bicis');

fetch('/api/bicicletas')
  .then(function (res) { return res.json(); })
  .then(function (data) {
    data.bicicletas.forEach(function (bici) {
      var marcador = L.marker(bici.ubicacion, { title: 'Bici ' + bici.id })
        .addTo(map)
        .bindPopup('Bici ' + bici.id + '<br>Color: ' + bici.color + '<br>Modelo: ' + bici.modelo);

      // item de la lista lateral
      var item = document.createElement('li');
      item.textContent = 'Bici ' + bici.id + ' - ' + bici.color + ' - ' + bici.modelo;
      item.addEventListener('click', function () {
        map.flyTo(bici.ubicacion, 16);
        marcador.openPopup();
      });
      lista.appendChild(item);
    });
  });
