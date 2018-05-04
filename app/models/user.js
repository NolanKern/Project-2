module.exports = function(sequelize, DataTypes){
    var user = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fb_uid: {
        type: DataTypes.STRING
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

    return user;
}