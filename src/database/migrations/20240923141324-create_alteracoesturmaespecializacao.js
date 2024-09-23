'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('alteracaoturmaespecializacao', {
      login: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      idTurma: {
        type: Sequelize.BIGINT,
        primaryKey: true
      },
      dataModificacao: {
        type: Sequelize.DATE,
        primaryKey: true
      },
      valorAnteriorNumeroVagas: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      valorPosteriorNumeroVagas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      valorAnteriorNumeroMinimoAlunos: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      valorPosteriorNumeroMinimoAlunos: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      }
    })

    await queryInterface.addConstraint('alteracaoturmaespecializacao', {
      fields: ['login'],
      type: 'foreign key',
      name: 'fk_login_alteracaoturmaespecializacao',
      references: {
        table: 'coordenadornacionalidioma',
        field: 'login'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

    await queryInterface.addConstraint('alteracaoturmaespecializacao', {
      fields: ['idTurma'],
      type: 'foreign key',
      name: 'fk_idTurma_alteracaoturmaespecializacao',
      references: {
        table: 'turmadisciplinaespecializacao',
        field: 'idTurma'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('alteracaoturmaespecializacao')
  }
};