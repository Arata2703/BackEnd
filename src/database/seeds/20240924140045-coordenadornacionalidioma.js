'use strict';

import '../../database'
import CoordenadorNacionalIdioma from '../../app/models/usuarios/coordenadornacionalIdioma';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const coordenadores = [
      {
        login: "Juvenas",
        idioma: "ingles"
      },
      {
        login: "Yumi",
        idioma: "japones"
      }
    ]

    try {  
      await CoordenadorNacionalIdioma.bulkCreate(coordenadores, { individualHooks: true })
    } catch (error) {
      throw error
    }

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('coordenadornacionalidioma', null, {})
  }
};
