module.exports = function(sequelize, DataTypes) {
    var Scores = sequelize.define("Scores", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: 1,
            primaryKey: 1,
            allowNull: 0
        },
        
    });
    return Scores;
  };