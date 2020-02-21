module.exports = function(sequelize, DataTypes) {
    var Account = sequelize.define('Account', {
        // add properites here
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        userID: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });

    return Account;
};