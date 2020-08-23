'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('items', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			apparelId: {
				type: Sequelize.INTEGER
			},
			color: {
				type: Sequelize.STRING
			},
			size: {
				type: Sequelize.STRING
			},
			image: {
				type: Sequelize.STRING
			},
			stock: {
				type: Sequelize.INTEGER
			},
			price: {
				type: Sequelize.FLOAT
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('items');
	}
};
