var Bicicleta = function (id, color, modelo, ubicacion) {
  this.id = id;
  this.color = color;
  this.modelo = modelo;
  this.ubicacion = ubicacion;
};

Bicicleta.prototype.toString = function () {
  return 'id: ' + this.id + ' | color: ' + this.color;
};

Bicicleta.allBicis = [];

Bicicleta.add = function (aBici) {
  Bicicleta.allBicis.push(aBici);
};

Bicicleta.findById = function (aBiciId) {
  var aBici = Bicicleta.allBicis.find(function (x) { return x.id == aBiciId; });
  if (aBici) return aBici;
  throw new Error('No existe una bicicleta con el id ' + aBiciId);
};

Bicicleta.removeById = function (aBiciId) {
  Bicicleta.findById(aBiciId);
  Bicicleta.allBicis = Bicicleta.allBicis.filter(function (x) { return x.id != aBiciId; });
};

Bicicleta.add(new Bicicleta(1, 'rojo', 'urbana', [14.0723, -87.1921]));
Bicicleta.add(new Bicicleta(2, 'azul', 'montaña', [14.0780, -87.1850]));

module.exports = Bicicleta;
