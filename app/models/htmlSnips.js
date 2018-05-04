module.exports = function(sequelize, DataTypes){
    var htmlSnip = sequelize.define("htmlSnip", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    snip_name: {
        type: DataTypes.STRING
    },
    snip_type: {
        type: DataTypes.STRING
    },
    snip_loc: {
        type: DataTypes.STRING
    },
    snip_content: {
        type: DataTypes.TEXT
    }
    }, {
    timestamps: true
    });

    // Burger.associate = function (models) {
    //     models.burger.belongsTo(models.user, {
    //       onDelete: "CASCADE",
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    //   };

    return htmlSnip;
}