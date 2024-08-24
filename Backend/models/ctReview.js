module.exports = (sequelize, DataTypes)=>{
    const ctReview = sequelize.define("ctReview", {

        introductiontocontemporarytechnology: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        ecommerce: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        egovernance: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        cloudcomputingandiot: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        ai: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        multimedia: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        bigdata: {
            type: DataTypes.INTEGER,
            allowNull: true
        }


    });

    ctReview.associate = (models)=>{
        ctReview.belongsTo(models.userData, {
            foreignKey : 'userId',
            onDelete : 'cascade'
        });
      }

    return ctReview
}