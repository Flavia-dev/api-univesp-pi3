const mongoose = require('mongoose');
const Anuncios = mongoose.model('Anuncios');

// list
exports.listAnuncios = async (req, res) => {
  try {
    const data = await Anuncios.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar os anúncios.'});
  }
};

// create
exports.createAnuncios = async (req, res) => {
  try {
    const anuncio = new Anuncios({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        modalidade: req.body.modalidade,
        nivel: req.body.nivel,
        cidade: req.body.cidade,
        empresa: req.body.empresa,
        salario: req.body.salario,
        id: req.body.id
    });

    console.log(anuncio)

    await anuncio.save();

    res.status(201).send({message: 'Anuncio cadastrado com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar o anúncio.'});
  }
};