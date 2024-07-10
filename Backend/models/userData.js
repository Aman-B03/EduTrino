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
        }
    });
    return userData;
};
