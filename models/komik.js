module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define('Komik', {
        id: {
            type: DataTypes
            autoIncrement: true,
            primaryKey: true
        },