module.exports = (sequelize, DataTypes) => {
    const userData = sequelize.define("userData", {
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        class: {
            type: DataTypes.STRING, // Changed to STRING for simplicity
            allowNull: false
        },
        score : {
            type : DataTypes.INTEGER,
            allowNull : true
        }
    });

    userData.associate = (models)=>{
        userData.hasOne(models.physicsReview, {
            foreignKey : 'userId',
            onDelete : 'cascade'
        });
        userData.hasOne(models.chemistryReview, {
            foreignKey : 'userId',
            onDelete : 'cascade'
        });
        userData.hasOne(models.mathsReview, {
            foreignKey : 'userId',
            onDelete : 'cascade'
        });
        userData.hasOne(models.seReview, {
            foreignKey : 'userId',
            onDelete : 'cascade'
        });
        userData.hasOne(models.vpReview, {
            foreignKey : 'userId',
            onDelete : 'cascade'
        });
        userData.hasOne(models.cnReview, {
            foreignKey : 'userId',
            onDelete : 'cascade'
        });
        userData.hasOne(models.ctReview, {
            foreignKey : 'userId',
            onDelete : 'cascade'
        });

    }
    return userData;
};
