import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE_URL);

function db() {
    try {
        sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

class User extends Model {}
User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
}, { sequelize, modelName: "user" });

const users = User.findAll();

export default users;
