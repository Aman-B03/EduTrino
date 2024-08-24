module.exports = (sequelize, DataTypes) =>{
    const mathsReview = sequelize.define("mathsReview", {

        permutationandcombination: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        binomialtheorem: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        sequenceandseries: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        mathematicalinduction: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        complexnumbers: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        quadraticequation: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        propertiesoftriangle: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        solutionoftriangle: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        conicsection: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        coordinatesinspace: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        productofvectors: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        measureofdispersion: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        probability: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        derivatives: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        applicationsofderivatives: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        antiderivatives: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        differentialequations: {
            type: DataTypes.INTEGER,
            allowNull: true
        }


    });
     
    mathsReview.associate = (models)=>{
        mathsReview.belongsTo(models.userData, {
            foreignKey : 'userId',
            onDelete : 'cascade'
        });
      }

    return mathsReview;
}