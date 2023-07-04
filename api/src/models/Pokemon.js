const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      }
    },
    hp:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 100,
      },
    },
    atk:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 100,
      },
    },
    def:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 100,
      },
    },
    speed:{
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100,
      },
    },
    height:{
      type: DataTypes.DECIMAL,
      validate: {
        min: 0,
      },
    },
    weight:{
      type: DataTypes.DECIMAL,
      validate: {
        min: 0,
      },
    },
    created:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }, {timestamps: false});
};
