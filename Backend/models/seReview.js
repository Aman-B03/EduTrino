module.exports = (sequelize, DataTypes)=>{
    const seReview = sequelize.define("seReview", {

        introductiontosoftwareengineering: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        projectmanagementtechniques: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        softwaredevelopmentlifecycle: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        softwaredevelopmentmodel: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        softwareanalysisanddesigntools: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        projectwork: {
            type: DataTypes.INTEGER,
            allowNull: true
        }


    });

    seReview.associate = (models)=>{
        seReview.belongsTo(models.userData, {
            foreignKey : 'userId',
            onDelete : 'cascade'
        });
      }

    return seReview
}