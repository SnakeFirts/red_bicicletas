var map = L.map('main_map').setView([14.0723, -87.1921], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

fetch('/api/bicicletas')
  .then(function (res) { return res.json(); })
  .then(function (data) {
    data.bicicletas.forEach(function (bici) {
      L.marker(bici.ubicacion, { title: 'Bici ' + bici.id }).addTo(map);
    });
  });
