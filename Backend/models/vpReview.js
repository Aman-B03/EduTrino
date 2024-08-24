module.exports = (sequelize, DataTypes)=>{
    const vpReview = sequelize.define("vpReview", {

        introductiontocsharpdotnet: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        controlstatements: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        arrays: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        strings: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        structures: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        pointers: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        workingwithdatabase: {
            type: DataTypes.INTEGER,
            allowNull: true
        }


    });

    vpReview.associate = (models)=>{
        vpReview.belongsTo(models.userData, {
            foreignKey : 'userId',
            onDelete : 'cascade'
        });
      }

    return vpReview
}