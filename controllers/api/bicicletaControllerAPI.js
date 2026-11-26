var Bicicleta = require('../../models/bicicleta');

exports.bicicleta_list = function (req, res) {
  res.status(200).json({ bicicletas: Bicicleta.allBicis });
};

exports.bicicleta_create = function (req, res) {
  var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo,
    [Number(req.body.lat), Number(req.body.lng)]);
  Bicicleta.add(bici);
  res.status(200).json({ bicicleta: bici });
};

exports.bicicleta_update = function (req, res) {
  try {
    var bici = Bicicleta.findById(req.body.id);
    bici.color = req.body.color;
    bici.modelo = req.body.modelo;
    bici.ubicacion = [Number(req.body.lat), Number(req.body.lng)];
    res.status(200).json({ bicicleta: bici });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.bicicleta_delete = function (req, res) {
  try {
    Bicicleta.removeById(req.body.id);
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
