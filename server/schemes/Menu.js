import Sequelize from "sequelize";
import connectionDB from "../database";

const MenuScheme = connectionDB.define("menu", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: Sequelize.STRING,
    href: Sequelize.STRING
});

export default MenuScheme;