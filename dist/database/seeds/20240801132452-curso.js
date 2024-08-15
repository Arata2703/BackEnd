"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }'use strict';

require('../../database');
var _curso = require('../../app/models/curso'); var _curso2 = _interopRequireDefault(_curso);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cursos = [
      {
        idCurso: 1,
        nome: "Japonês básico 1",
        idioma: "Japonês",
        categoria: "dia a dia",
        nivel: "N5",
        cargaHoraria: "12",
        ementa: "req.body.ementa",
        justificativa: "req.body.justificativa",
        objetivos: "req.body.objetivos",
        metodologia: "req.body.metodologia",
        descricaoAvaliacao: "req.body.descricaoAvaliacao",
        aspectosFuncionais: "req.body.aspectosFuncionais",
        aspectosInterculturais: "req.body.aspectosInterculturais",
        aspectosLinguisticos: "req.body.aspectosLinguisticos"
      },
      {
        idCurso: 2,
        nome: "Inglês básico 1",
        idioma: "Inglês",
        categoria: "dia a dia",
        nivel: "A1",
        cargaHoraria: "30",
        ementa: "req.body.ementa",
        justificativa: "req.body.justificativa",
        objetivos: "req.body.objetivos",
        metodologia: "req.body.metodologia",
        descricaoAvaliacao: "req.body.descricaoAvaliacao",
        aspectosFuncionais: "req.body.aspectosFuncionais",
        aspectosInterculturais: "req.body.aspectosInterculturais",
        aspectosLinguisticos: "req.body.aspectosLinguisticos"
      },
      {
        idCurso: 3,
        nome: "Alemão básico 1",
        idioma: "Alemão",
        categoria: "dia a dia",
        nivel: "A1",
        cargaHoraria: "12",
        ementa: "req.body.ementa",
        justificativa: "req.body.justificativa",
        objetivos: "req.body.objetivos",
        metodologia: "req.body.metodologia",
        descricaoAvaliacao: "req.body.descricaoAvaliacao",
        aspectosFuncionais: "req.body.aspectosFuncionais",
        aspectosInterculturais: "req.body.aspectosInterculturais",
        aspectosLinguisticos: "req.body.aspectosLinguisticos"
      },
      {
        idCurso: 4,
        nome: "Italiano básico 1",
        idioma: "Italiano",
        categoria: "dia a dia",
        nivel: "A1",
        cargaHoraria: "12",
        ementa: "req.body.ementa",
        justificativa: "req.body.justificativa",
        objetivos: "req.body.objetivos",
        metodologia: "req.body.metodologia",
        descricaoAvaliacao: "req.body.descricaoAvaliacao",
        aspectosFuncionais: "req.body.aspectosFuncionais",
        aspectosInterculturais: "req.body.aspectosInterculturais",
        aspectosLinguisticos: "req.body.aspectosLinguisticos"
      },
      {
        idCurso: 5,
        nome: "Espanhol básico 1",
        idioma: "Espanhol",
        categoria: "dia a dia",
        nivel: "A1",
        cargaHoraria: "12",
        ementa: "req.body.ementa",
        justificativa: "req.body.justificativa",
        objetivos: "req.body.objetivos",
        metodologia: "req.body.metodologia",
        descricaoAvaliacao: "req.body.descricaoAvaliacao",
        aspectosFuncionais: "req.body.aspectosFuncionais",
        aspectosInterculturais: "req.body.aspectosInterculturais",
        aspectosLinguisticos: "req.body.aspectosLinguisticos"
      },
      {
        idCurso: 6,
        nome: "Português básico 1",
        idioma: "Português",
        categoria: "dia a dia",
        nivel: "A1",
        cargaHoraria: "12",
        ementa: "req.body.ementa",
        justificativa: "req.body.justificativa",
        objetivos: "req.body.objetivos",
        metodologia: "req.body.metodologia",
        descricaoAvaliacao: "req.body.descricaoAvaliacao",
        aspectosFuncionais: "req.body.aspectosFuncionais",
        aspectosInterculturais: "req.body.aspectosInterculturais",
        aspectosLinguisticos: "req.body.aspectosLinguisticos"
      },
      {
        idCurso: 7,
        nome: "Francês básico 1",
        idioma: "Francês",
        categoria: "dia a dia",
        nivel: "A1",
        cargaHoraria: "12",
        ementa: "req.body.ementa",
        justificativa: "req.body.justificativa",
        objetivos: "req.body.objetivos",
        metodologia: "req.body.metodologia",
        descricaoAvaliacao: "req.body.descricaoAvaliacao",
        aspectosFuncionais: "req.body.aspectosFuncionais",
        aspectosInterculturais: "req.body.aspectosInterculturais",
        aspectosLinguisticos: "req.body.aspectosLinguisticos"
      }
    ]

    await _curso2.default.bulkCreate(cursos, { individualHooks: true })

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('curso', null, {})
    await queryInterface.sequelize.query('ALTER TABLE curso AUTO_INCREMENT = 1')
  }
};
