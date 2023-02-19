const mongoose = require("mongoose")
require('dotenv').config;

const uri = process.env.mongoDBUrl || 'mongodb+srv://terosadmin:Teros2023@teroscluster.anzylbg.mongodb.net/openBanking?retryWrites=true&w=majority'
mongoose.set('strictQuery', true);
mongoose.connect(uri, { useNewUrlParser: true })

const databaseConnection = mongoose.connection
databaseConnection.once("open", () => {
    console.log("MongoDB ==> database connection established successfully")
})

module.exports = databaseConnection;