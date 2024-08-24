module.exports = (sequelize, DataTypes)=>{
    const chemistryReview = sequelize.define("chemistryReview", {
        haloalkanes: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        alcohols: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        phenols: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        aliphaticaldehydesandketones: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        chemistryofmetals: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        studiesofheavymetals: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        volumetricanalysis: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        ionicequilibrium: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        chemicalkinetics: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        thermodynamics: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        electrochemistry: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        chemistryintheserviceofmankind: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        nuclearchemistryandapplicationsofradioactivity: {
            type: DataTypes.INTEGER,
            allowNull: true
        }


    });

    chemistryReview.associate = (models)=>{
        chemistryReview.belongsTo(models.userData, {
            foreignKey : 'userId',
            onDelete : 'cascade'
        });
      }

    return chemistryReview
}