module.exports = function(sequelize, DataTypes) {
    var Account = sequelize.define('Account', {
        firstName: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        userID: { 
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        password: { 
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Account;
};