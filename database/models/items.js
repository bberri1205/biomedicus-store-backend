'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class items extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			items.belongsTo(models.apparels);
		}
	}
	items.init(
		{
			apparelId: DataTypes.INTEGER,
			color: DataTypes.STRING,
			size: DataTypes.STRING,
			image: DataTypes.STRING,
			stock: DataTypes.INTEGER,
			price: DataTypes.FLOAT
		},
		{
			sequelize,
			modelName: 'items'
		}
	);
	return items;
};
