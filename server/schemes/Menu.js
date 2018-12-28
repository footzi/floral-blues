import Sequelize from 'sequelize';
import connectionDB from '../database';

export default connectionDB.define('menu', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: Sequelize.STRING,
    href: Sequelize.STRING
});