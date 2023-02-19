require('dotenv').config;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./src/routes');
const CronOneHour = require('./src/jobs/cron')
const databaseConnection = require('./src/configs/database')

const PORT = 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', router)

CronOneHour()

app.listen(PORT, () => {
    console.log(`API OPEN BANKING IS RUNNING ON PORT ${PORT}`)
})
