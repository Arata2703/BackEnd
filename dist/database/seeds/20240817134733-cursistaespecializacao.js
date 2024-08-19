"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }'use strict';

require('../../database');
var _cursistaespecializacao = require('../../app/models/cursistaespecializacao'); var _cursistaespecializacao2 = _interopRequireDefault(_cursistaespecializacao);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cursistas = [
      {
        login: "Carlos"
      },
      {
        login: "Pedro"
      },
      {
        login: "Pietro"
      }
    ]

    try {  
      await _cursistaespecializacao2.default.bulkCreate(cursistas, { individualHooks: true })
    } catch (error) {
      throw error
    }

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cursistaespecializacao', null, {})
  }
};