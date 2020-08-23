'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class apparels extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			apparels.hasMany(models.items);
		}
	}
	apparels.init(
		{
			name: DataTypes.STRING,
			type: DataTypes.STRING
		},
		{
			sequelize,
			modelName: 'apparels'
		}
	);
	return apparels;
};
