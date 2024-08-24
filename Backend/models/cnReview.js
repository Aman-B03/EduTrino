module.exports = (sequelize, DataTypes)=>{
    const cnReview = sequelize.define("cnReview", {

        introductiontocomputernetwork: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        networktypesandtopologies: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        networking: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        devicesandtransmissionmedia: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        networkarchitecture: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        referencemodelandipaddressing: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        workgroupcomputing: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        networksecurity: {
            type: DataTypes.INTEGER,
            allowNull: true
        }


    });

    cnReview.associate = (models)=>{
        cnReview.belongsTo(models.userData, {
            foreignKey : 'userId',
            onDelete : 'cascade'
        });
      }

    return cnReview
}