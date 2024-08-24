module.exports = (sequelize, DataTypes)=>{
      const physicsReview = sequelize.define("physicsReview", {

        rotationaldynamics: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        simpleharmonicmotion: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        fluidstatic: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        firstlawofthermodynamics: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        wavemotion: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        wavesinpipesandstrings: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        acuosticphenomenon: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        wavenatureoflight: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        electricalcircuits: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        magneticpropertiesofmaterials: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        magneticfield: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        alternatingcurrent: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        electrons: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        photons: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        semiconductordevices: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        quantizationofenergy: {
            type: DataTypes.INTEGER,
            allowNull: true
        }

      });

      physicsReview.associate = (models)=>{
        physicsReview.belongsTo(models.userData, {
            foreignKey : 'userId',
            onDelete : 'cascade'
        });
      }


      return physicsReview
}





